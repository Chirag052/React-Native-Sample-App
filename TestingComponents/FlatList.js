//ListView, ScrollView, RefreshControl
//scroll view with large size listview cause problem bcz it will load complete list at once also pops it give to display list is few
//thats why we use flatlist

import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    var [Items, setItems] = useState([
        { value: 1 },//key should always string in flatList, key can also be added inse flatList
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 91 }
    ])

    const DATA = [
        {
            title: 'Title 1',
            data: ['Item 1', "Item 2", 'Item 3']
        },
        {
            title: 'Title 2',
            data: ['Item 1', "Item 2"]
        },
        {
            title: 'Title 3',
            data: ['Item 1', "Item 2", 'Item 3']
        },
        {
            title: 'Title 4',
            data: ['Item 1']
        },
        {
            title: 'Title 5',
            data: ['Item 1', "Item 2", 'Item 3', 'Item 4']
        }
    ]

    const [Refreshing, setRefreshing] = useState(false)

    const onRefreshListner = () => {
        setRefreshing(true)
        setItems([...Items, { key: "12", value: 10 }]);
        setRefreshing(false)

    }
    return (

        <SectionList
            keyExtractor={(item, index) => (index.toString())}
            sections={DATA}
            renderItem={({ item }) => (
                <Text style={styles.text}>{item}</Text>
            )
            }
            renderSectionHeader={({ section }) => {
                return (
                    <View style={styles.item}>
                        <Text style={styles.text}>{section.title}</Text>
                    </View>
                )
            }}


        />

        // <FlatList
        //     // numColumns={2}
        //     horizontal
        //     inverted
        //     keyExtractor={(item, index) => index.toString()}
        //     data={Items}
        //     renderItem={({ item }) => (
        //         <View style={styles.item}>
        //             <Text style={styles.text}>{item.value}</Text>
        //         </View>
        //     )
        //     }
        //     refreshControl={
        //         <RefreshControl
        //             refreshing={Refreshing} //refreshing props control the spinner and when its false it will stop
        //             onRefresh={onRefreshListner}
        //             colors={['#F0f']}
        //         />
        //     }

        // />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    item: {
        'backgroundColor': '#0FF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        padding: 20


    }
});

/**
 * 1. b cor
 * 2. c
 * 3. a 
 * 4. a cor
 * 5.c cor
 * 6.b cor
 * 7. b cor
 * 8. c 
 * 9. a cor
 * 10 b cor
 */