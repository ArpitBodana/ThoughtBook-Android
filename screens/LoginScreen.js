import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginCard from '../components/LoginCard/LoginCard'
import { GlobalStyles } from '../Theme/GlobalStyles'
import { ScrollView } from 'react-native'
import { userLoginHandler } from '../utils/NetworkCalls/UserAPI'
import { useDispatch} from 'react-redux'
import { requestUserLogin, userLoginFail, userLoginSuccess } from '../redux/Authentication/authActions'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const handleLogin = (username, password) => {
    console.log("login started");
    dispatch(requestUserLogin());
    userLoginHandler(username, password).then(res => {dispatch(userLoginSuccess(res.data.token));console.log(res);}).catch(err => { console.log(err); dispatch(userLoginFail()) })

  }
  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <LoginCard loginHandler={handleLogin} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen