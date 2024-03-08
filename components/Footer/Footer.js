import { View, Text } from 'react-native'
import React from 'react'
import { FooterStyles } from './FooterStyles'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function Footer() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold

  });
  return (
    <View style={FooterStyles.footer}>
      <Text style={[FooterStyles.footerText, { fontFamily: "Poppins_400Regular" }]}>© 2021 ThoughtBook devloped by ArpitBodana.</Text>
    </View>
  )
}