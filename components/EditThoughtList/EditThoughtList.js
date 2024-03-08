import { Button, FlatList, Text, TextInput, View } from "react-native";
import { EditThoughtListStyles } from "./EditThoughtListStyles";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { Colors } from "../../theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import Nothing from "../Nothing/Nothing";
import { useState } from "react";
import { showToast } from "../../utils/Toast";
import { editThought, getAllThoughts } from "../../utils/NetworkCalls/ThoughtsAPI";
import { fetchThoughtFail, fetchThoughtSuccess, fetchThoughts } from "../../redux/Thought/thoughtActions";
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";

export default function EditThoughtList({ data, modalHandler }) {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    
      });
    //console.log("edit thought list .......", data);
    let { userName, authToken } = useSelector(state => state.auth)
    let filteredData = data.filter(item => item.user == userName)
    const [mthought, setThought] = useState("");
    const [mauthor, setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleEdit = (id, thought, author, userName, authToken) => {
        if (mthought == "" && mauthor == "") {
            showToast("Nothing is changed to save");
            return
        }
        else {
            editThought(id, thought, author, userName, authToken).then(res => {
                dispatch(fetchThoughts());
                getAllThoughts().then(res => { dispatch(fetchThoughtSuccess(res.data)); }).catch(err => { console.log(err); dispatch(fetchThoughtFail(err.message)) });
            }).catch(err => {
                console.log(err);
                showToast("Something went wrong please try after some time.")
            })
        }
    }

    return (
        <FlatList
            style={EditThoughtListStyles.flatList}
            showsVerticalScrollIndicator={false}
            data={filteredData}
            renderItem={({ item }) => {
                return (
                    <View style={[GlobalStyles.card, EditThoughtListStyles.editThoughtCard]}>
                        <Text style={[EditThoughtListStyles.text,{ fontFamily: "Poppins_400Regular" }]}>{item.id}</Text>
                        <View style={EditThoughtListStyles.horizonatalRule}></View>
                        <Text style={[EditThoughtListStyles.text,{ fontFamily: "Poppins_400Regular" }]}>Thought</Text>
                        <TextInput defaultValue={item.thought} onChangeText={setThought} style={[GlobalStyles.input, { textAlign: "center",fontFamily: "Poppins_400Regular"  }]} multiline />
                        <Text style={[EditThoughtListStyles.text,{ fontFamily: "Poppins_400Regular" }]}>Author</Text>
                        <TextInput defaultValue={item.author} onChangeText={setAuthor} style={[GlobalStyles.input, { textAlign: "center" ,fontFamily: "Poppins_400Regular" }]} multiline />
                        <View style={EditThoughtListStyles.horizonatalRule}></View>
                        <View style={[EditThoughtListStyles.bottomBtn]}>
                            <Button title="Delete" color={Colors["brand-color-secondary"]} onPress={() => modalHandler(item.id)} />
                            <Button title="Save" color={Colors["button-color-primary"]} onPress={() => handleEdit(item.id, mthought == "" ? item.thought : mthought, mauthor == "" ? item.author : mauthor, userName, authToken)} />
                        </View>
                    </View>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Nothing />}
        />
    )
}