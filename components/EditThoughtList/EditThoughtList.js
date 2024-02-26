import { Button, FlatList, Text, TextInput, View } from "react-native";
import { EditThoughtListStyles } from "./EditThoughtListStyles";
import { GlobalStyles } from "../../Theme/GlobalStyles";
import { Colors } from "../../Theme/Colors";

export default function EditThoughtList({ data }) {
    //console.log("edit thought list .......", data);
    return (
        <FlatList
            style={EditThoughtListStyles.flatList}
            data={data}
            renderItem={({ item }) => {
                return (
                        <View style={[GlobalStyles.card, EditThoughtListStyles.editThoughtCard]}>
                            <Text style={EditThoughtListStyles.text}>{item.id}</Text>
                            <View style={EditThoughtListStyles.horizonatalRule}></View>
                            <Text style={EditThoughtListStyles.text}>Thought</Text>
                            <TextInput defaultValue={item.thought} style={GlobalStyles.input} multiline />
                            <Text style={EditThoughtListStyles.text}>Author</Text>
                            <TextInput defaultValue={item.author} style={[GlobalStyles.input,{textAlign:"center"}]} multiline />
                            <View style={EditThoughtListStyles.horizonatalRule}></View>
                            <View style={[EditThoughtListStyles.bottomBtn]}>
                                <Button title="Delete"  color={Colors["brand-color-secondary"]} />
                                <Button title="Save" color={Colors["button-color-primary"]}/>
                            </View>
                        </View>   
                )
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Text>No Data For Showcase!!</Text>}
            ListFooterComponent={<Text style={{ marginTop: 30 }}>Belongs to Arpit Bodana</Text>}
        />
    )
}