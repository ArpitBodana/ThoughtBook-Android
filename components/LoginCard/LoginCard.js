import { View, Text, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../../Theme/Colors'
import { GlobalStyles } from '../../Theme/GlobalStyles'

export default function LoginCard() {
    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Login</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText}>UserName</Text>
                    <TextInput style={GlobalStyles.input} />
                    <Text style={GlobalStyles.formText} >Password</Text>
                    <TextInput style={GlobalStyles.input} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Login' color={Colors['button-color-primary']} />
            </View>
        </View>
    )
}