import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import CustButton from '../customComponents/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        try {
            AsyncStorage.getItem('User').then(value => {
                if (value != null) {
                    navigation.navigate('Home')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning', 'Please write your data')
        } else {
            try {
                var user = {
                    Nasme: name,
                    Age: age
                }
                await AsyncStorage.setItem('User', JSON.stringify(user));
                navigation.navigate('Home')

            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <View
            style={styles.body}>

            <Image
                style={styles.logo}
                source={require('../assets/welcome_icon.png')} />

            <Text style={styles.text}> Async Storage</Text>

            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)} />

            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => setAge(value)} />

            <CustButton
                title='Login'
                color='#1eb'
                onPressFunction={setData}

            />


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#0080ff"
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginBottom: 20
    },
    text: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 100
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        padding: 10
    }

})