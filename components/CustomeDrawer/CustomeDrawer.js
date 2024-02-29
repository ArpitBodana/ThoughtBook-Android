import { View, Text, Button } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Colors } from '../../Theme/Colors'
import { CustomeDrawerStyles } from './CutomeDrawerStyles'
import { useSelector } from 'react-redux'

const CustomeDrawer = (props) => {
    const {isAuthenticated}=useSelector(state=>state.auth)
    return (
        <View style={CustomeDrawerStyles.mainView}>
            <DrawerContentScrollView {...props}>
                <View style={CustomeDrawerStyles.brandView}>
                    <Text style={CustomeDrawerStyles.brandText}>ThoughtBook</Text>
                    <Text style={CustomeDrawerStyles.appVersion}>v0.1</Text>
                </View>
                <DrawerItemList {...props}  />
            </DrawerContentScrollView>
            <View>
                {isAuthenticated && <Button title='Logout' color={Colors['brand-color-secondary']} />}
            </View>
        </View>
    )
}

export default CustomeDrawer