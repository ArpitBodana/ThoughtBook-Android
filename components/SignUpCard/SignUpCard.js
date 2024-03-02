import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'
import { GlobalStyles } from '../../theme/GlobalStyles'

export default function SignUpCard() {
  return (
    <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.card, GlobalStyles.innerCard]}>
        <Text style={GlobalStyles.brandText}>Sign Up</Text>
        <View style={GlobalStyles.horizonatalRule}></View>
        <View style={GlobalStyles.formControls}>
          <Text style={GlobalStyles.formText}>UserName</Text>
          <TextInput style={GlobalStyles.input} />
          <Text style={GlobalStyles.formText}>Email</Text>
          <TextInput style={GlobalStyles.input} />
          <Text style={GlobalStyles.formText} >Password</Text>
          <TextInput style={GlobalStyles.input} secureTextEntry />
          <Text style={GlobalStyles.formText} >Confirm Password</Text>
          <TextInput style={GlobalStyles.input} secureTextEntry />
        </View>
        <View style={GlobalStyles.horizonatalRule}></View>
        <Button title='Sign Up' color={Colors['button-color-primary']} />
      </View>
    </View>
  )
}