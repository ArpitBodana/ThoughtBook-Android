import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import { GlobalStyles } from '../../theme/GlobalStyles'

export default function SignUpCard({signUpHandler}) {
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [conPass,setConPass]=useState("");
  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
        <Text style={GlobalStyles.brandText}>Sign Up</Text>
        <View style={GlobalStyles.horizonatalRule}></View>
        <View style={GlobalStyles.formControls}>
          <Text style={GlobalStyles.formText}>UserName</Text>
          <TextInput style={GlobalStyles.input} value={username} onChangeText={setUserName} />
          <Text style={GlobalStyles.formText}>Email</Text>
          <TextInput style={GlobalStyles.input} value={email} onChangeText={setEmail} />
          <Text style={GlobalStyles.formText} >Password</Text>
          <TextInput style={GlobalStyles.input} secureTextEntry value={pass} onChangeText={setPass} />
          <Text style={GlobalStyles.formText} >Confirm Password</Text>
          <TextInput style={GlobalStyles.input} secureTextEntry value={conPass} onChangeText={setConPass} />
        </View>
        <View style={GlobalStyles.horizonatalRule}></View>
        <Button title='Sign Up' color={Colors['button-color-primary']} onPress={()=>signUpHandler(username,pass,conPass,email)} />
      </View>
    </View>
  )
}