import { Text } from 'react-native'
import React, { useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeList from '../components/HomeList/HomeList'
import { GlobalStyles } from '../Theme/GlobalStyles'
import { getAllThoughts } from '../utils/NetworkCalls/ThoughtsAPI'
import { useSelector, useDispatch } from 'react-redux';
import { fetchThoughtFail, fetchThoughtSuccess, fetchThoughts } from '../redux/Thought/thoughtActions'


export default function HomeScreen() {
    const { loading, thoughts } = useSelector(state => state.thoughts);
    const dispatch = useDispatch()

    const fetchThoughtsData = () => {
        dispatch(fetchThoughts());
        getAllThoughts().then(res => { dispatch(fetchThoughtSuccess(res.data)); }).catch(err => { console.log(err); dispatch(fetchThoughtFail(err.message)) });
    }

    useEffect(() => {
        fetchThoughtsData();
    }, [])

    return (
        <SafeAreaView style={GlobalStyles.screen}>
            {loading ? <Text>Loading ...... </Text> : <HomeList data={thoughts} />}
        </SafeAreaView>
    )
}

