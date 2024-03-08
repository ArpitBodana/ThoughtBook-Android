import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HomeListStyles } from './HomeListStyles'
import { GlobalStyles } from '../../theme/GlobalStyles'
import HomeListHeader from './HomeListHeader'
import Footer from '../Footer/Footer'
import Nothing from '../Nothing/Nothing'
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font";
import { Waterfall_400Regular } from "@expo-google-fonts/waterfall"
import { Colors } from '../../theme/Colors'


const HomeList = ({ data, onRefreshHandler }) => {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_500Medium,
        Waterfall_400Regular

    });
    // console.log('working...........HOMELIST ',data);
    const [refreshing, setRefreshing] = useState(false);
    const refreshList = () => {
        setRefreshing(true);
        onRefreshHandler();
        setRefreshing(false);
    }
    return (
        <FlatList
            style={HomeListStyles.flatList}
            data={data.reverse()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                //console.log(item);
                return (
                    <View style={[GlobalStyles.card]}>
                        <Text style={[HomeListStyles.text, { fontFamily: "Poppins_400Regular" }]}>{item.id}</Text>
                        <View style={HomeListStyles.horizonatalRule}></View>
                        <Text style={[HomeListStyles.text, { fontFamily: "Poppins_400Regular" }]}>{item.thought}</Text>
                        <Text style={[HomeListStyles.text, { fontFamily: "Poppins_400Regular" }]}>{item.author}</Text>
                        <View style={HomeListStyles.horizonatalRule}></View>
                        <View style={GlobalStyles.cardBottom}>
                            <Text style={[HomeListStyles.text, { fontFamily: "Poppins_400Regular" }]}>{item.date}</Text>
                            <Text style={[HomeListStyles.text, { fontSize: 36, fontFamily: "Waterfall_400Regular", color: Colors['brand-color'] }]}>{item.user}</Text>
                        </View>
                    </View>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Nothing />}
            ListHeaderComponent={<HomeListHeader />}
            ListFooterComponent={<Footer />}
            refreshing={refreshing}
            onRefresh={() => refreshList()}
        />
    )
}

export default HomeList