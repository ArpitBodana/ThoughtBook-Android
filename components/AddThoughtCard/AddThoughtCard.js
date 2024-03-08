import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Colors } from '../../theme/Colors'
import { useSelector } from 'react-redux'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";


export default function AddThoughtCard({ handleSave }) {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    
      });
    const { userName, authToken } = useSelector(state => state.auth);
    const [thought, setThought] = useState("");
    const [author, setAuthor] = useState("");

    const resetFields = () => {
        setAuthor("");
        setThought("");
    }
    const handlePress = () => {
        handleSave(thought, author, userName, authToken, resetFields);
    }
    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={[GlobalStyles.brandText, { fontWeight:"100", fontFamily: "Poppins_500Medium" }]}>Add whats in your mind</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>Thought</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular"}]} multiline value={thought} onChangeText={setThought} />
                    <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]} >Author</Text>
                    <TextInput style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular" }]} value={author} onChangeText={setAuthor} />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Add My Thought' color={Colors['button-color-primary']} onPress={handlePress}  />
            </View>
        </View>
    )
}