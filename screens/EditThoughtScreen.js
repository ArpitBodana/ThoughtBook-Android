import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../Theme/GlobalStyles';
import EditThoughtList from '../components/EditThoughtList/EditThoughtList';
import { useSelector } from 'react-redux';



export default function EditThoughtScreen() {

  const { loading, thoughts } = useSelector(state => state.thoughts)

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <View >
        <Text style={GlobalStyles.brandText}>Bring Change To Your Thoughts</Text>
        {loading ? <Text>Loading ...... </Text> : <EditThoughtList data={thoughts} />}
      </View>
    </SafeAreaView>
  )
}