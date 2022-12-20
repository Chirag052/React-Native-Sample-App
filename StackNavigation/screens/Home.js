import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustButton from '../customComponents/CustomButton';
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => {
        //return if success

    },
    error => {
        console.log(error)
    }
)

export default function Home({ navigation }) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')


    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        try {
            // AsyncStorage.getItem('User').then(value => {
            //     if (value != null) {
            //         let user = JSON.parse(value)
            //         setName(user.Nasme)
            //         setAge(user.Age)
            //     }
            // })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT name, age from USERS where id = 1",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            setName(userName)
                            setAge(userAge)

                        }
                    }
                )
            })
        } catch (error) {
            console.log(error)
        }
    }


    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning', 'Please write your name')
        } else {
            try {
                var user = {
                    Name: name,

                }
                await AsyncStorage.setItem('User', JSON.stringify(user));
                Alert.alert("Success!", "Your Name has been updated")

            } catch (error) {
                console.log(error)
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('User');
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Welcome {name} !
            </Text>

            <Text style={styles.text}>
                Your age is {age} !
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)} />

            <CustButton title='Update' color='#1eb' onPressFunction={updateData} />
            <CustButton title='Remove' color='#FF0000' onPressFunction={removeData} />

        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
        padding: 10
    }
});