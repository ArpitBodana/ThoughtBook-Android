import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddThoughtScreen from '../screens/AddThoughtScreen';
import EditThoughtScreen from '../screens/EditThoughtScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';


export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ThoughtBook" component={HomeScreen} options={{ drawerLabel: "Home" }} />
            {true && <Drawer.Screen name="Login" component={LoginScreen} />}
            <Drawer.Screen name="Sign Up" component={SignUpScreen} />
            <Drawer.Screen name="Add Thought" component={AddThoughtScreen} />
            <Drawer.Screen name="Edit Thought" component={EditThoughtScreen} />
            <Drawer.Screen name="Change Password" component={ChangePasswordScreen} />
        </Drawer.Navigator>
    )
}