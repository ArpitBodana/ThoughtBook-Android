import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const EditThoughtListStyles = StyleSheet.create({
    text: {
        color: Colors["font-color-primary"],
        marginVertical: 8,
        textAlign: "center"
    },
    flatList: {
        backgroundColor: Colors["bg-color-primary"],
    },
    horizonatalRule: {
        height:1,
        width:"100%",
        backgroundColor: Colors["line-color"]
    },
    editThoughtCard:{
        gap:0,
        alignItems:"center",
    },
    bottomBtn:{
      margin:5,
      padding:5,
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      alignSelf:"stretch"
    }
});