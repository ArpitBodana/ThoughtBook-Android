import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";


export const NothingStyles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        backgroundColor:Colors["card-background"],
        height:40,
    },
    text:{
        color:Colors["font-color-primary"]
    }
})