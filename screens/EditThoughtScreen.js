import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../Theme/GlobalStyles';
import { getAllThoughts } from '../utils/API Calls/ThoughtsAPI';
import EditThoughtList from '../components/EditThoughtList/EditThoughtList';



export default function EditThoughtScreen() {

  const [loading, setLoading] = useState(true);
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    getAllThoughts().then(res => {
      let filterdData = res.data.filter(data => data.user === "Admin");
      setThoughts(filterdData);
      //console.log("filterd data.......",thoughts);
      setLoading(false)
    }
    ).catch(err => { console.log(err); setLoading(false) })
  }, [loading])

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <View >
        <Text style={GlobalStyles.brandText}>Bring Change To Your Thoughts</Text>
        {loading ? <Text>Loading ...... </Text>:<EditThoughtList data={thoughts}/>}
      </View>
    </SafeAreaView>
  )
}