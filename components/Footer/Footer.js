import { View, Text } from 'react-native'
import React from 'react'
import { FooterStyles } from './FooterStyles'

export default function Footer() {
    return (
        <View style={FooterStyles.footer}> 
          <Text style={FooterStyles.footerText}>© 2021 ThoughtBook devloped by ArpitBodana.</Text>
        </View>
      )
}