import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const HomeListStyles = StyleSheet.create({
    text: {
        color: Colors["font-color-primary"],
        marginVertical: 8,
        textAlign: "center"
    },
    flatList: {
        backgroundColor: Colors["bg-color-primary"]
    },
    horizonatalRule: {
        height: 1,
        backgroundColor: Colors["line-color"]
    },
    header:{
        marginTop:20,
        marginBottom:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:15
    },
    headerText:{
        color:Colors["brand-color"],
    },
});