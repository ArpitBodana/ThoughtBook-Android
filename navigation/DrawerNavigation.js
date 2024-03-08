import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddThoughtScreen from '../screens/AddThoughtScreen';
import EditThoughtScreen from '../screens/EditThoughtScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import { useSelector } from 'react-redux';
import CustomeDrawer from '../components/CustomeDrawer/CustomeDrawer';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons'
import { Colors } from '../theme/Colors';
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";




export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    const { isAuthenticated } = useSelector(state => state.auth);
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium

    });

    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,

            drawerActiveBackgroundColor: Colors['brand-color-opacity'],
            drawerActiveTintColor: Colors['brand-color'],
            drawerInactiveBackgroundColor: Colors['bg-color-primary'],
            drawerLabelStyle: {
                marginLeft: -20
            }
        }} drawerContent={props => <CustomeDrawer {...props} />} >
            <Drawer.Screen name="ThoughtBook" component={HomeScreen} options={{
                drawerLabel: "Home", drawerLabelStyle: { fontFamily: "Poppins_500Medium" }, drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />
            {!isAuthenticated && <Drawer.Screen name="Login" component={LoginScreen} options={{
                drawerLabelStyle: { fontFamily: "Poppins_500Medium" },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="login" size={22} color={color} />
                )
            }} />}
            {!isAuthenticated && <Drawer.Screen name="Sign Up" component={SignUpScreen} options={{
                drawerLabelStyle: { fontFamily: "Poppins_500Medium" },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="person-add-alt" size={22} color={color} />
                )
            }} />}
            {isAuthenticated && <Drawer.Screen name="Add Thought" component={AddThoughtScreen} options={{
                drawerLabelStyle: { fontFamily: "Poppins_500Medium" },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="post-add" size={22} color={color} />
                )
            }} />}
            {isAuthenticated && <Drawer.Screen name="Edit Thought" component={EditThoughtScreen} options={{
                drawerLabelStyle: { fontFamily: "Poppins_500Medium" },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="edit-note" size={22} color={color} />
                )
            }} />}
            {isAuthenticated && <Drawer.Screen name="Change Password" component={ChangePasswordScreen} options={{
                drawerLabelStyle: { fontFamily: "Poppins_500Medium" },
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="change-circle" size={22} color={color} />
                )
            }} />}
        </Drawer.Navigator>
    )
}