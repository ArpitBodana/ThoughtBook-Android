import { View, Text } from 'react-native'
import React from 'react'
import { HomeListStyles } from './HomeListStyles'
import { MaterialIcons } from 'react-native-vector-icons'
import { Colors } from '../../theme/Colors'

export default function HomeListHeader() {
  return (
    <View style={HomeListStyles.header}>
        <MaterialIcons name="menu-book" size={22} color={Colors['brand-color']} />
      <Text style={HomeListStyles.headerText}>Read something intresting</Text>
    </View>
  )
}