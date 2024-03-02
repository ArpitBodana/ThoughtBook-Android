import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginCard from '../components/LoginCard/LoginCard'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ScrollView } from 'react-native'
import { userLoginHandler } from '../utils/NetworkCalls/UserAPI'
import { useDispatch } from 'react-redux'
import { requestUserLogin, userLoginFail, userLoginSuccess } from '../redux/Authentication/authActions'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const handleLogin = (username, password) => {
    dispatch(requestUserLogin());
    userLoginHandler(username, password).then(res => { dispatch(userLoginSuccess(res.data.token, username)); }).catch(err => { console.log(err); dispatch(userLoginFail()) })
  }

  const goToHome = () => {
    navigation.jumpTo("ThoughtBook");
  }

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <LoginCard loginHandler={handleLogin} goToHome={goToHome} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen