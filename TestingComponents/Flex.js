//Structure and Basic Componens in app #5
//hooks

import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {



    return (
        <View style={styles.body}>
            <View style={styles.row}>
                <View style={styles.view1}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text}>3</Text>
                </View>

            </View>
            <View style={styles.row}>
                <View style={styles.view4}>
                    <Text style={styles.text}>4</Text>
                </View>

            </View>
            <View style={styles.row}>
                <View style={styles.view5}>
                    <Text style={styles.text}>5</Text>
                </View>
            </View>
            <View style={styles.bigRow}>
                <View style={styles.view6}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>

        </View>
    );
}

//flex is just like weight
//flex-direction: column, column-reverse, row, row-reverse

//width:"100%" height:"50%"
//width:100 height:21 (this will be in px)
//flex :1(full margin and width)
const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    bigRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: "#FFFF00"
    },
    view1: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2: {
        flex: 2,
        backgroundColor: '#ff00ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view3: {
        flex: 3,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view4: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view5: {
        flex: 1,
        backgroundColor: '#0fff0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view6: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view7: {
        flex: 1,
        backgroundColor: '#0FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic',
        margin: 10,
    }
});