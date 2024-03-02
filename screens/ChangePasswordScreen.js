import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChangePasswordCard from '../components/ChangePasswordCard/ChangePasswordCard'
import { ScrollView } from 'react-native'

export default function ChangePasswordScreen() {
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <ChangePasswordCard />
      </ScrollView>
    </SafeAreaView>
  )
}