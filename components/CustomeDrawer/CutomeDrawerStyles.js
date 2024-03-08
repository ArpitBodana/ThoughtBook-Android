import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const CustomeDrawerStyles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors["bg-color-primary"],
    },
    brandView:{
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        marginBottom:20,
        borderBottomWidth:0.2,
        borderBottomColor:Colors["brand-color"],
        backgroundColor:Colors["bg-color-primary"],
        // margin:8,
        // elevation:20
    },
    brandText:{
        color:Colors["brand-color"],
        textAlign:"center",
        fontSize:35,
    },
    appVersion:{
        color:Colors["brand-color"],
        fontWeight:"bold"
    },
    logoutBtn:{
        backgroundColor:Colors["card-background"],
        justifyContent:"center",
        alignItems:"center",
        height:40,
        flexDirection:"row",
        gap:10,
        elevation:0,
    },
    logoutBtnText:{
        color:Colors["brand-color"]
    }
})