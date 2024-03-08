import { View, Text } from 'react-native'
import React from 'react'
import { NothingStyles } from './NothingStyles'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function Nothing() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold

  });

  return (
    <View style={NothingStyles.main}>
      <Text style={[NothingStyles.text, { fontFamily: "Poppins_400Regular" }]}>Opps! Nothing found</Text>
    </View>
  )
}