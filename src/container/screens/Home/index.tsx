import React, { useEffect, } from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView, FlatList, Keyboard, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "./styles";
import { RootStackParamList } from "../../../services/RootNavigator";
import { useNavigation } from "@react-navigation/native";
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
import auth from '@react-native-firebase/auth';
import { resetUserInfo, updateUserToken } from "../../../redux/Actions/UserDataToken";
import { Log } from "../../../utils/Logger";

const Home = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

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
            navigation.navigate("Notes")
            return
        }

    }

    //callback for delete operation
    const onPressDeleteBtn = (item: Note, index: number) => {
        dispatch(startRemoveNotes(item.id))
    }

    // sign out handling
    const onSignOutBtnPress = () => {

        Alert.alert(
            'NotesApp',
            "Are you sure you want to logout?",
            [{
                text: "No", onPress: () => {
                }
            }, {
                text: "Yes", onPress: () => {
                    try {
                        auth().signOut().then((response) => {
                            dispatch(updateUserToken(''))
                        });
                    } catch (e) {
                      Log(e);
                    }
                }
            }
            ],
            { cancelable: false }
        );

    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {
        return (
            <CustomTabCardComponent userNotesObj={item} />
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