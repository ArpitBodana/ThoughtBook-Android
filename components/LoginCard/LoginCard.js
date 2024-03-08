import { View, Text, Button, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../../theme/Colors'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { useSelector } from 'react-redux'
import { showToast } from '../../utils/Toast'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function LoginCard(props) {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    
      });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const { isAuthenticated, authToken, loading, errorMsg } = useSelector(state => state.auth)
    const login = () => {
        if (username != "" && password != "") {
            props.loginHandler(username, password)
        }
        else {
            if (username == "" && password == "") {
                showToast("Please fill username and passoword fields!")

            } else if (password == "") {
                showToast("Please fill passoword fields!")
            } else {
                showToast("Please fill username !")
            }
        }
    }
    useEffect(() => {
        if (errorMsg != "") {
            showToast(errorMsg)
        }
        if (isAuthenticated) {
            setPassword("");
            setUsername("");
            props.goToHome();
        }
    }, [errorMsg, isAuthenticated])

    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={[GlobalStyles.brandText,{ fontWeight:"100", fontFamily: "Poppins_500Medium" }]}>Login</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>UserName</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]} value={username} onChangeText={setUsername} />
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]} >Password</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]} value={password} onChangeText={setPassword} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Login' color={Colors['button-color-primary']} onPress={() => login()} />
            </View>
        </View>
    )
}