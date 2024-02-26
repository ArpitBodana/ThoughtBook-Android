import { Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeList from '../components/HomeList/HomeList'
import { GlobalStyles } from '../Theme/GlobalStyles'
import { getAllThoughts } from '../utils/API Calls/ThoughtsAPI'

export default function HomeScreen() {
    const [allThoughts, setAllThoughts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllThoughts().then(res => { setAllThoughts(res.data); setLoading(false) }).catch(err => { console.log(err); setLoading(false) })
    }, [loading])

    return (
        <SafeAreaView style={GlobalStyles.screen}>
            {loading ? <Text>Loading ...... </Text> : <HomeList data={allThoughts} />}
        </SafeAreaView>
    )
}

