import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CustomeDrawerStyles } from './CutomeDrawerStyles'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons } from 'react-native-vector-icons'
import { Colors } from '../../theme/Colors'
import { logMeOut } from '../../redux/Authentication/authActions'
import { DrawerActions } from '@react-navigation/native';
import {  Poppins_200ExtraLight,Poppins_400Regular} from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";




const CustomeDrawer = (props) => {

    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,Poppins_400Regular

    });

    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logMeOut());
        props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    return (
        <View style={CustomeDrawerStyles.mainView}>
            <DrawerContentScrollView {...props}>
                <View style={CustomeDrawerStyles.brandView}>
                <MaterialIcons name="menu-book" size={30} color={Colors['brand-color']} />
                    <Text style={[CustomeDrawerStyles.brandText,{fontFamily:"Poppins_400Regular"}]}>ThoughtBook</Text>
                    {/* <Text style={[CustomeDrawerStyles.appVersion,{fontFamily:"Poppins_400Regular"}]}>v0.1</Text> */}
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{ backgroundColor:Colors['card-background']}}>
                {isAuthenticated && <TouchableOpacity onPress={() => handleLogout()}>
                    <View style={CustomeDrawerStyles.logoutBtn}>
                        <MaterialIcons name="logout" size={22} color={Colors['brand-color']} />
                        <Text style={[CustomeDrawerStyles.logoutBtnText,{fontFamily:"Poppins_400Regular"}]}>Logout</Text>
                    </View></TouchableOpacity>}
            </View>
        </View>
    )
}

export default CustomeDrawer