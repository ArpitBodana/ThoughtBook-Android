import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";

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
    }
});