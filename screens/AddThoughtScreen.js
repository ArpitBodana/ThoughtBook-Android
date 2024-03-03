import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../theme/GlobalStyles'
import AddThoughtCard from '../components/AddThoughtCard/AddThoughtCard'
import { addThought } from '../utils/NetworkCalls/ThoughtsAPI'
import { showToast } from '../utils/Toast'

export default function AddThoughtScreen() {
  const handleSave = (thought, author, user, token, resetFields) => {
    if (token === "" || user === "") {
      showToast("Unauthorize Operations!!")
      return false
    }
    if (thought === "" || author === "") {
      showToast("Please fill all fields.")
      return false
    }
    return addThought(thought, author, user, token).then(res => { showToast("Thought Spreaded"); resetFields() }).catch(err => { showToast("Something went wrong. Please try after some time."); console.log(err); });
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <AddThoughtCard handleSave={handleSave} />
      </ScrollView>
    </SafeAreaView>
  )
}