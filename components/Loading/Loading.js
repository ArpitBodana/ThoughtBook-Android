import { Text, View, } from 'react-native'
import React from 'react'
import { LoadingStyles } from './LoadingStyles'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../theme/Colors'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function Loading() {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    
      });
    return (
        <View style={LoadingStyles.main} >
            <ActivityIndicator size={50} color={Colors['brand-color']} />
            <Text style={{fontFamily:"Poppins_600SemiBold", color:Colors['brand-color']}}>Collecting Thoughts</Text>
        </View>
    )
}