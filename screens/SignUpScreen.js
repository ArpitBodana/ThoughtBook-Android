
import React from 'react'
import SignUpCard from '../components/SignUpCard/SignUpCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../theme/GlobalStyles'
import { ScrollView } from 'react-native'
import { userLoginHandler, userSignUp } from '../utils/NetworkCalls/UserAPI'
import { showToast } from '../utils/Toast'
import { useDispatch } from 'react-redux'
import { requestUserLogin, userLoginFail, userLoginSuccess } from '../redux/Authentication/authActions'

export default function SignUpScreen() {

    const dispatch = useDispatch();
    const signUpHandler = (username, password, conpass, email) => {
        if (username == "" || password == "" || email == "") {
            showToast("Please fill all fields.")
            return
        } else if (password !== conpass) {
            showToast("Confirm password not matched.")
            return
        } else {
            userSignUp(username, password, email).then(res => {
                console.log(res);
                dispatch(requestUserLogin());
                userLoginHandler(username, password).then(res => { dispatch(userLoginSuccess(res.data.token, username)); showToast("All set up ready to read."); }).catch(err => { console.log(err); dispatch(userLoginFail()) })
            }).catch(err => {
                console.log(err);
                showToast("Something went wrong please try again after some time.")
            })
        }

    }
    return (
        <SafeAreaView style={GlobalStyles.screen}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <SignUpCard signUpHandler={signUpHandler} />
            </ScrollView>
        </SafeAreaView >
    )
}