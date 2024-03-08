import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Colors } from '../../theme/Colors'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function ChangePasswordCard({ handleChangePassword }) {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    
      });

    const { authToken } = useSelector(state => state.auth);
    const [newPass, setNewPass] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [conPass, setconPass] = useState("");


    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={[GlobalStyles.brandText,{ fontWeight:"100", fontFamily: "Poppins_500Medium" }]}>Change Your Password</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]} >Old Password</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]} value={oldPass} onChangeText={setOldPass} secureTextEntry />
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>New Password</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]} value={newPass} onChangeText={setNewPass} secureTextEntry />
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>Confirm Password</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]}value={conPass} onChangeText={setconPass} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Change' color={Colors['button-color-primary']} onPress={() => handleChangePassword(oldPass, newPass, conPass, authToken)} />
            </View>
        </View>
    )
}