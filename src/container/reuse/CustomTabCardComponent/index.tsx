/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import styles from './styles';
import { Note } from '../../screens/EnterNotes';
import LinearGradient from "react-native-linear-gradient";
import { getRandomColors } from '../../../utils/Common';


const CustomTabCardComponent = ({ userNotesObj }: { userNotesObj: Note }) => {

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

                </TouchableOpacity>


            </LinearGradient>

        </View>
    );
}

export default CustomTabCardComponent;





