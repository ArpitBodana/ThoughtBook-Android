import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Theme/GlobalStyles'
import { Colors } from '../../Theme/Colors'

export default function AddThoughtCard() {
    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Add whats in your mind</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText}>Thought</Text>
                    <TextInput style={GlobalStyles.input} multiline />
                    <Text style={GlobalStyles.formText} >Author</Text>
                    <TextInput style={GlobalStyles.input} secureTextEntry />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Add My Thought' color={Colors['button-color-primary']} />
            </View>
        </View>
    )
}