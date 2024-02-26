import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { HomeListStyles } from './HomeListStyles'
import { GlobalStyles } from '../../Theme/GlobalStyles'
const HomeList = ({ data }) => {

    // console.log('working...........HOMELIST ',data);
    return (
        <FlatList
            style={HomeListStyles.flatList}
            data={data}
            renderItem={({ item }) => {
                //console.log(item);
                return (
                    <View style={[GlobalStyles.card]}>
                        <Text style={HomeListStyles.text}>{item.id}</Text>
                        <View style={HomeListStyles.horizonatalRule}></View>
                        <Text style={HomeListStyles.text}>{item.thought}</Text>
                        <Text style={HomeListStyles.text}>{item.author}</Text>
                        <View style={HomeListStyles.horizonatalRule}></View>
                        <View style={GlobalStyles.cardBottom}>
                            <Text style={HomeListStyles.text}>{item.date}</Text>
                            <Text style={[HomeListStyles.text, { fontWeight: "bold" }]}>{item.user}</Text>
                        </View>

                    </View>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Text>No Data For Showcase!!</Text>}
            ListHeaderComponent={<Text style={{ marginBottom: 30 }}>Available Thoughts</Text>}
            ListFooterComponent={<Text style={{ marginTop: 30 }}>Belongs to Arpit Bodana</Text>}
        />
    )
}

export default HomeList