import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";


export const CustomeDrawerStyles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors["bg-color-primary"],
    },
    brandView:{
        height:100,
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        marginBottom:20,
        borderBottomWidth:0.2,
        borderBottomColor:Colors["brand-color"]
    },
    brandText:{
        color:Colors["brand-color"],
        textAlign:"center",
        fontSize:35
    },
    appVersion:{
        color:Colors["button-color-primary"],
        fontWeight:"bold"
    }
})