import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function SignUpCard({signUpHandler}) {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold

  });
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [conPass,setConPass]=useState("");
  
  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
        <Text style={[GlobalStyles.brandText, { fontWeight:"100", fontFamily: "Poppins_500Medium" }]}>Sign Up</Text>
        <View style={GlobalStyles.horizonatalRule}></View>
        <View style={GlobalStyles.formControls}>
          <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>UserName</Text>
          <TextInput style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular" }]} value={username} onChangeText={setUserName} />
          <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]}>Email</Text>
          <TextInput style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular" }]} value={email} onChangeText={setEmail} />
          <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]} >Password</Text>
          <TextInput style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular" }]} secureTextEntry value={pass} onChangeText={setPass} />
          <Text style={[GlobalStyles.formText,{ fontFamily: "Poppins_400Regular" }]} >Confirm Password</Text>
          <TextInput style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular" }]} secureTextEntry value={conPass} onChangeText={setConPass} />
        </View>
        <View style={GlobalStyles.horizonatalRule}></View>
        <Button title='Sign Up' color={Colors['button-color-primary']} onPress={()=>signUpHandler(username,pass,conPass,email)} />
      </View>
    </View>
  )
}