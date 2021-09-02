import React, { useEffect, } from "react";
import { TouchableOpacity, Image, Text, View, SafeAreaView, FlatList, Keyboard } from 'react-native';
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

const Home = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

    const dispatch = useDispatch()
    useEffect(() => {
        getNotesListing()

    }, [])

    const getNotesListing = async () => {
        const res = await dispatch(getAddedNotes())
        //console.log(res)
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

    const onPressDeleteBtn = (noteArray: Note[], item: Note, index: number) => {

        dispatch(startRemoveNotes(noteArray,item.id))
        return

        //setNotes({ ...notes, id: noteArray.length, value: "" })
    }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {
        console.log(JSON.stringify(index))
        return (
            <CustomTabCardComponent userNotesObj={item} />
        )
    }


    console.log(noteArray)
    return (

        <SafeAreaView style={styles.rootMainContainer} >

            <Header isShowingOnBackPress={false}
                headerTitle={'Home'}
                onBackPress={() => navigation.goBack()} />
            {
                noteArray.length > 1 ? <SwipeListView
                    style={styles.swiperListViewContainer}
                    data={noteArray}
                    renderItem={renderNotes}
                    //keyExtractor={(item) => item.id.toString()}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={styles.deleteBtnContainer}
                                onPress={() => onPressDeleteBtn(noteArray, data.item, data.index)}
                            >
                                <Image source={require('../../../../assets/images/icon_delete_red.png')}
                                    style={{ height: 25, width: 25 }} />
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


            {/* <TouchableOpacity style={styles.iconAddBtnContainer}
                onPress={() => {
                    navigation.navigate("EnterNotes")
                }}>
                <Image source={require('../../../assets/images/icon_add_more.png')} />
            </TouchableOpacity> */}
        </SafeAreaView >
    )

}

export default Home;