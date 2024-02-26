import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../Theme/GlobalStyles'
import AddThoughtCard from '../components/AddThoughtCard/AddThoughtCard'

export default function AddThoughtScreen() {
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <AddThoughtCard />
      </ScrollView>
    </SafeAreaView>
  )
}