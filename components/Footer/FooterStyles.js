import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const FooterStyles = StyleSheet.create({
    footer:{
        justifyContent:"flex-end",
        gap:5,
        backgroundColor:Colors["card-background"],
        height:45,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },
    footerText:{
        color:Colors["brand-color"]
    }
})