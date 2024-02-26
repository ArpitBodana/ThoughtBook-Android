import { View, Text, Button } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Theme/GlobalStyles'
import { Colors } from '../../Theme/Colors'
import { TextInput } from 'react-native-gesture-handler'

export default function ChangePasswordCard() {
    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Change Your Password</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText} >Old Password</Text>
                    <TextInput style={GlobalStyles.input} secureTextEntry />
                    <Text style={GlobalStyles.formText} >New Password</Text>
                    <TextInput style={GlobalStyles.input} secureTextEntry />
                    <Text style={GlobalStyles.formText} >Confirm Password</Text>
                    <TextInput style={GlobalStyles.input} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Change' color={Colors['button-color-primary']} />
            </View>
        </View>
    )
}