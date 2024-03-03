import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChangePasswordCard from '../components/ChangePasswordCard/ChangePasswordCard'
import { ScrollView } from 'react-native'
import { changeMyPassword } from '../utils/NetworkCalls/UserAPI'
import { useDispatch } from 'react-redux'
import { logMeOut } from '../redux/Authentication/authActions'
import { showToast } from '../utils/Toast'

export default function ChangePasswordScreen({ navigation }) {
  const dispatch=useDispatch()
  
  const handleChangePassword = (oldPwd, newPwd, conPwd, token) => {
    if (newPwd == "" || oldPwd == "" || conPwd == "") {
      showToast("Please fill all fields.")
      return
    }

    if (newPwd !== conPwd) {
      showToast("Confirm password not matched.")
      return
    } 
    else {
      console.log('workinags');
      changeMyPassword(oldPwd, newPwd,token).then(res => {console.log("res",res); dispatch(logMeOut()); navigation.navigate("ThoughtBook"); }).catch(err => {showToast(err);console.log(err)})
    }

  }
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <ChangePasswordCard handleChangePassword={handleChangePassword} />
      </ScrollView>
    </SafeAreaView>
  )
}