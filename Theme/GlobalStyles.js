import { StyleSheet } from "react-native"
import { Colors } from "./Colors"

export const GlobalStyles = StyleSheet.create({
    screen: {
        backgroundColor: Colors["bg-color-primary"],
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: 5,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    card: {
        backgroundColor: Colors["card-background"],
        padding: 10,
        margin: 10,
        elevation: 5,
        borderRadius: 7,
        borderTopEndRadius: 20,
        gap: 2,
    },
    innerCard: {
        width: 300,
        height: "auto",
        alignItems: "center",
        rowGap: 15,
        justifyContent: "space-between"
    },
    cardBottom: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    brandText: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: Colors["brand-color"],
        marginBottom: 10,
        marginTop: 20,
    },
    input: {
        borderColor: Colors["brand-color"],
        borderStyle: "solid",
        borderWidth: 2,
        width: 265,
        borderRadius: 15,
        padding: 4,
        width: "auto",
        minWidth: "100%",
        marginBottom: 10
    },
    formControls: {
        gap: 10,
        margin: 2
    },
    formText: {
        marginHorizontal: 5
    },
    horizonatalRule: {
        height: 1,
        width: "100%",
        backgroundColor: Colors["line-color"]
    },
    popUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: Colors["brand-color-secondary"],
    },
    buttonClose: {
        backgroundColor: Colors["brand-color"],
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalBottom:{
        flexDirection:"row",
        alignSelf:"stretch",
        justifyContent:"space-between"
    }
})
