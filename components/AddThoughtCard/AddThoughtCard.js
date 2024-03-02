import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Colors } from '../../theme/Colors'
import { useSelector } from 'react-redux'

export default function AddThoughtCard({ handleSave }) {
    const { userName, authToken } = useSelector(state => state.auth);
    const [thought, setThought] = useState("");
    const [author, setAuthor] = useState("");

    const resetFields=()=>{
        setAuthor("");
        setThought("");
    }
    const handlePress = () => {
        handleSave(thought, author, userName, authToken,resetFields);
    }
    return (
        <View style={GlobalStyles.container}>
            <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
                <Text style={GlobalStyles.brandText}>Add whats in your mind</Text>
                <View style={GlobalStyles.horizonatalRule}></View>
                <View style={GlobalStyles.formControls}>
                    <Text style={GlobalStyles.formText}>Thought</Text>
                    <TextInput style={GlobalStyles.input} multiline value={thought} onChangeText={setThought} />
                    <Text style={GlobalStyles.formText} >Author</Text>
                    <TextInput style={GlobalStyles.input} value={author} onChangeText={setAuthor} />
                </View>
                <View style={GlobalStyles.horizonatalRule}></View>
                <Button title='Add My Thought' color={Colors['button-color-primary']} onPress={handlePress} />
            </View>
        </View>
    )
}