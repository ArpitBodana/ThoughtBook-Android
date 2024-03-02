import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HomeListStyles } from './HomeListStyles'
import { GlobalStyles } from '../../theme/GlobalStyles'
import HomeListHeader from './HomeListHeader'
import Footer from '../Footer/Footer'
import Nothing from '../Nothing/Nothing'
const HomeList = ({ data ,onRefreshHandler}) => {

    // console.log('working...........HOMELIST ',data);
    const [refreshing, setRefreshing]=useState(false);
    const refreshList=()=>{
        setRefreshing(true);
        onRefreshHandler();
        setRefreshing(false);
    }
    return (
        <FlatList
            style={HomeListStyles.flatList}
            data={data.reverse()}
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
            ListEmptyComponent={<Nothing/>}
            ListHeaderComponent={<HomeListHeader/>}
            ListFooterComponent={<Footer/>}
            refreshing={refreshing}
            onRefresh={()=>refreshList()}
        />
    )
}

export default HomeList