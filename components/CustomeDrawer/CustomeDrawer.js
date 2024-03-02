import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CustomeDrawerStyles } from './CutomeDrawerStyles'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons } from 'react-native-vector-icons'
import { Colors } from '../../theme/Colors'
import { logMeOut } from '../../redux/Authentication/authActions'
import { DrawerActions } from '@react-navigation/native';

const CustomeDrawer = (props) => {
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
                    <Text style={CustomeDrawerStyles.brandText}>ThoughtBook</Text>
                    <Text style={CustomeDrawerStyles.appVersion}>v0.1</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                {isAuthenticated && <TouchableOpacity onPress={()=>handleLogout()}>
                    <View style={CustomeDrawerStyles.logoutBtn}>
                        <MaterialIcons name="logout" size={22} color={Colors['card-background']} />
                        <Text style={CustomeDrawerStyles.logoutBtnText}>Logout</Text>
                    </View></TouchableOpacity>}
            </View>
        </View>
    )
}

export default CustomeDrawer