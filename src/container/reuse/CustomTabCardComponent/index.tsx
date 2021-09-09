/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import styles from './styles';
import { Note } from '../../screens/EnterNotes';
import LinearGradient from "react-native-linear-gradient";
import { getRandomColors } from '../../../utils/Common';


const CustomTabCardComponent = ({ userNotesObj, onPressEditBtn, onPressCopyBtn }: { userNotesObj: Note, onPressEditBtn: () => void, onPressCopyBtn: () => void }) => {

    return (
        <View style={{ marginBottom: moderateScale(20) }}>

            <LinearGradient style={styles.linearGradientContainer}
                colors={getRandomColors()}>

                <TouchableOpacity style={styles.itemMainConatiner}
                    activeOpacity={0}
                >

                    <TouchableOpacity style={styles.addBtnContainer}>

                        <View style={styles.dataInfoContainer}>

                            <Text style={styles.txtItemDescription}>{userNotesObj.value}</Text>

                        </View>

                    </TouchableOpacity>

                    <View style={styles.copyEditImgContainer}>
                        <TouchableOpacity style={styles.deleteBtnContainer}
                            onPress={onPressEditBtn}>
                            <Image source={require('../../../../assets/images/ic_edit.png')}
                                style={styles.editImg} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteBtnContainer}
                            onPress={onPressCopyBtn} >
                            <Image source={require('../../../../assets/images/ic_copy.png')}
                                style={styles.editImg} />
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>


            </LinearGradient>

        </View>
    );
}

export default CustomTabCardComponent;





