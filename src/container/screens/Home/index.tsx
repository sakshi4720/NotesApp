import React, { useEffect, useState } from "react";
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
import { getAddedNotes } from "../../../redux/Actions/Notes";
import Header from '../../reuse/CustomHeader';

const Home = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAddedNotes)

    }, [])

    const noteArray = useSelector((state: AppState) => state.notes.value);
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
        dispatch(getAddedNotes)
        if (selectedOption === 'Notes') {
            navigation.navigate("Notes")
            return
        }

    }

    //console.log(JSON.stringify(noteArray))

    // const onPressDeleteBtn = (item: Note, index: number) => {

    //     let selectedIndex = noteArray.findIndex((element) => { return element.id == item.id })
    //     noteArray.splice(selectedIndex, 1)
    //     //setNotes({ ...notes, id: noteArray.length, value: "" })
    // }

    const renderNotes = ({ item, index }: { item: Note, index: number }) => {
        console.log(JSON.stringify(item))
        return (
            <CustomTabCardComponent userNotesObj={item} />
        )
    }

    return (

        < SafeAreaView style={styles.rootMainContainer} >

            <Header isShowingOnBackPress={false}
                headerTitle={'Home'}
                onBackPress={() => navigation.goBack()}
            />

            {
                noteArray.length > 0 ? <SwipeListView
                    style={styles.swiperListViewContainer}
                    data={noteArray}
                    renderItem={renderNotes}
                    keyExtractor={(item) => item.id.toString()}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={styles.deleteBtnContainer}
                                //onPress={() => onPressDeleteBtn(data.item, data.index)}
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