import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../theme/GlobalStyles'
import AddThoughtCard from '../components/AddThoughtCard/AddThoughtCard'
import { addThought, getAllThoughts } from '../utils/NetworkCalls/ThoughtsAPI'
import { showToast } from '../utils/Toast'
import { useDispatch } from 'react-redux'
import { fetchThoughtFail, fetchThoughtSuccess, fetchThoughts } from '../redux/Thought/thoughtActions'

export default function AddThoughtScreen() {
  const dispatch = useDispatch();
  const handleSave = (thought, author, user, token, resetFields) => {
    if (token === "" || user === "") {
      showToast("Unauthorize Operations!!")
      return false
    }
    if (thought === "" || author === "") {
      showToast("Please fill all fields.")
      return false
    }
    return addThought(thought, author, user, token).then(res => {
      showToast("Thought Spreaded");
      resetFields()
      fetchThoughtsData()
    }).catch(err => { showToast("Something went wrong. Please try after some time."); console.log(err); });
  }

  const fetchThoughtsData = () => {
    dispatch(fetchThoughts());
    getAllThoughts().then(res => { dispatch(fetchThoughtSuccess(res.data)); }).catch(err => { console.log(err); dispatch(fetchThoughtFail(err.message)) });
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <AddThoughtCard handleSave={handleSave} />
      </ScrollView>
    </SafeAreaView>
  )
}