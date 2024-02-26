import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginCard from '../components/LoginCard/LoginCard'
import { GlobalStyles } from '../Theme/GlobalStyles'
import { ScrollView } from 'react-native'

const LoginScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <LoginCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen