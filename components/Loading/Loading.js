import { View, } from 'react-native'
import React from 'react'
import { LoadingStyles } from './LoadingStyles'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../theme/Colors'

export default function Loading() {
    return (
        <View style={LoadingStyles.main} >
            <ActivityIndicator size={50} color={Colors['brand-color']} />
        </View>
    )
}