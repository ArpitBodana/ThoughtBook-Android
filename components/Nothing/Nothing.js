import { View, Text } from 'react-native'
import React from 'react'
import { NothingStyles } from './NothingStyles'

export default function Nothing() {
  return (
    <View style={NothingStyles.main}>
      <Text style={NothingStyles.text}>Opps! Nothing found</Text>
    </View>
  )
}