import { View, Text, Button, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../../Theme/Colors'
import { GlobalStyles } from '../../Theme/GlobalStyles'
import { useSelector } from 'react-redux'

export default function LoginCard(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
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
        }
    }, [errorMsg, isAuthenticated])

    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Login</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText}>UserName</Text>
                    <TextInput style={GlobalStyles.input} value={username} onChangeText={setUsername} />
                    <Text style={GlobalStyles.formText} >Password</Text>
                    <TextInput style={GlobalStyles.input} value={password} onChangeText={setPassword} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Login' color={Colors['button-color-primary']} onPress={() => login()} />
            </View>
        </View>
    )
}