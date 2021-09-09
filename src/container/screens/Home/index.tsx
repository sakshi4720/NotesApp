import React, { useEffect, useState, } from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation, } from "@react-navigation/native";
import { FloatingAction } from 'react-native-floating-action';
import { getIcons } from '../../../../assets/images/icons'
import { moderateScale } from "react-native-size-matters";
import { SwipeListView } from "react-native-swipe-list-view";
import CustomTabCardComponent from "../../reuse/CustomTabCardComponent";
import { Note } from "../EnterNotes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/Store/configStore";
import { getAddedNotes, startRemoveNotes } from "../../../redux/Actions/Notes";
import Header from '../../reuse/CustomHeader';
import { resetUserInfo, } from "../../../redux/Actions/UserDataToken";
import Loader from '../../reuse/CustomLoader';
import Clipboard from '@react-native-community/clipboard';
import { showFlashMessage } from "../../../utils/Common";

const Home = () => {

    type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
    const navigation = useNavigation<NavigationProp>();

    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useDispatch()
    useEffect(() => {
        getNotesListing()

    }, [])

    //callback for get notes operation
    const getNotesListing = async () => {
        const res = await dispatch(getAddedNotes())
    }

    const noteArray = useSelector((state: AppState) => state.notes);

    const actionButtonStyle = {
        color: "white",
        textBackground: 'transparent',
        textColor: 'white',

    }

    const FABOptions = [
        {
            name: "Notes",
            text: "Add Notes",
            icon: getIcons('MCQIcon', 22),
            position: 1,
            ...actionButtonStyle,
        },

    ];

    const onFABPressed = (selectedOption?: string) => {

        if (selectedOption === 'Notes') {
            navigation.navigate('Notes', {
                userNoteObj: undefined
            })
            return
        }

    }

    //callback for delete operation
    const onPressDeleteBtn = (item: Note, index: number) => {
        dispatch(startRemoveNotes(item.id))
    }

    ////button for editing notes
    const onPressEditBtn = (item: Note) => {
        navigation.navigate('Notes', {
            userNoteObj: item
        })
    }

    //button for copying notes
    const onPressCopyBtn = (item: Note) => {
        Clipboard.setString(item.value);
        showFlashMessage("Note copied to clipboard", "success")
    }

    // sign out handling
    const onSignOutBtnPress = async () => {

        setLoading(true)

        await Alert.alert(
            'NotesApp',
            "Are you sure you want to logout?",
            [{
                text: "No", onPress: () => {
                    setLoading(false)
                }
            }, {
                text: "Yes", onPress: () => {
                    dispatch(resetUserInfo())
                    setLoading(false)
                }
            }
            ],
            { cancelable: false }
        );

    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {
        return (
            <CustomTabCardComponent userNotesObj={item}
                onPressCopyBtn={() => onPressCopyBtn(item)}
                onPressEditBtn={() => onPressEditBtn(item)} />
        )
    }


    return (

        <SafeAreaView style={styles.rootMainContainer} >

            <Header isShowingOnBackPress={false}
                headerTitle={'Home'}
                isShowingSignOut={true}
                onBackPress={() => navigation.goBack()}
                onSignOutBtnPress={() => onSignOutBtnPress()} />
            {
                noteArray.length > 0 ? <SwipeListView
                    style={styles.swiperListViewContainer}
                    data={noteArray}
                    renderItem={renderNotes}
                    keyExtractor={(item) => item.id.toString()}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={styles.deleteBtnContainer}
                                onPress={() => onPressDeleteBtn(data.item, data.index)}
                            >
                                <Image source={require('../../../../assets/images/icon_delete_red.png')}
                                    style={styles.deleteIcon} />
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-40}
                /> : <View style={styles.addIconContainer}>
                    <TouchableOpacity style={{}}>
                        <Image source={require('../../../../assets/images/ic_add_notes.png')} />
                    </TouchableOpacity>
                    <Text style={styles.txtNoNotesFound}>No Notes Found</Text>
                </View>
            }

            {loading && <Loader />}

            < FloatingAction
                actions={FABOptions}
                listenKeyboard
                dismissKeyboardOnPress
                color={"#728FCE"}
                onPressItem={onFABPressed}
                distanceToEdge={{
                    vertical: moderateScale(90),
                    horizontal: moderateScale(20),
                }
                }
                shadow={{
                    shadowColor: 'transparent'
                }}
            />
        </SafeAreaView >
    )
}

export default Home;