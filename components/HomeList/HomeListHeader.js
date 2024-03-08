import { View, Text } from 'react-native'
import React from 'react'
import { HomeListStyles } from './HomeListStyles'
import { MaterialIcons } from 'react-native-vector-icons'
import { Colors } from '../../theme/Colors'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function HomeListHeader() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold

  });
  return (
    <View style={HomeListStyles.header}>
      <MaterialIcons name="menu-book" size={30} color={Colors['brand-color']} />
      <Text style={[HomeListStyles.headerText, { fontFamily: "Poppins_600SemiBold" }]}>Read something intresting</Text>
    </View>
  )
}