//ListView, ScrollView, RefreshControl

import { StatusBar } from 'expo-status-bar';
import { Button, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    var [Items, setItems] = useState([
        { key: 1, value: 1 },
        { key: 2, value: 2 },
        { key: 3, value: 3 },
        { key: 4, value: 4 },
        { key: 5, value: 5 },
        { key: 6, value: 6 },
        { key: 8, value: 7 },
        { key: 9, value: 8 },
        { key: 110, value: 91 }
    ])

    const [Refreshing, setRefreshing] = useState(false)

    const onRefreshListner = () => {
        setRefreshing(true)
        setItems([...Items, { key: 12, value: 10 }]);
        setRefreshing(false)

    }
    return (

        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing} //refreshing props control the spinner and when its false it will stop
                    onRefresh={onRefreshListner}
                    colors={['#F0f']}
                />
            }
        >{
                Items.map((i) => {
                    return (
                        <View style={styles.item} key={i.key}>
                            <Text style={styles.text}>{i.value}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>

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