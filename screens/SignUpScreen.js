
import React from 'react'
import SignUpCard from '../components/SignUpCard/SignUpCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ScrollView } from 'react-native'

export default function SignUpScreen() {
    return (
        <SafeAreaView style={GlobalStyles.screen}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <SignUpCard />
            </ScrollView>
        </SafeAreaView >
    )
}