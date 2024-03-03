import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Colors } from '../../theme/Colors'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'


export default function ChangePasswordCard({ handleChangePassword }) {

    const { authToken } = useSelector(state => state.auth);
    const [newPass, setNewPass] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [conPass, setconPass] = useState("");


    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Change Your Password</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText} >Old Password</Text>
                    <TextInput style={GlobalStyles.input} value={oldPass} onChangeText={setOldPass} secureTextEntry />
                    <Text style={GlobalStyles.formText} >New Password</Text>
                    <TextInput style={GlobalStyles.input} value={newPass} onChangeText={setNewPass} secureTextEntry />
                    <Text style={GlobalStyles.formText} >Confirm Password</Text>
                    <TextInput style={GlobalStyles.input} value={conPass} onChangeText={setconPass} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Change' color={Colors['button-color-primary']} onPress={() => handleChangePassword(oldPass, newPass, conPass, authToken)} />
            </View>
        </View>
    )
}