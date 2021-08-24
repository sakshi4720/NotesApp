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
import { getIcons } from '../../../../assets/images/icons'
import { Note } from '../../screens/EnterNotes';


const CustomTabCardComponent = ({ userNotesObj, }: { userNotesObj: Note, }) => {

    return (
        <View style={{ marginBottom: moderateScale(20) }}>

            <TouchableOpacity style={styles.itemMainConatiner}
                activeOpacity={0}
            >

                <TouchableOpacity style={styles.addBtnContainer}>
                    {getIcons("AddIcon", 25)}

                    <View style={styles.dataInfoContainer}>

                        <Text style={styles.txtItemDescription}>{userNotesObj.value}</Text>

                    </View>

                    <TouchableOpacity style={styles.deleteBtnContainer}
                    //onPress={onPressDeleteBtn}
                    >
                        <Image source={require('../../../../assets/images/icon_delete_red.png')} />
                    </TouchableOpacity>

                </TouchableOpacity>

            </TouchableOpacity>

        </View>
    );
}

export default CustomTabCardComponent;





