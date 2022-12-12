import React, { useState } from 'react'
import { Text, TextInput, StatusBar, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid } from 'react-native'

export default function App() {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)


    const onClickHandler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted)
        } else {
            Alert.alert('Warning', 'the name should be longer than 3 characters', [
                { text: 'Cancel', onPress: () => console.warn('OK Pressed') },
                { text: 'No', onPress: () => console.warn('OK Pressed') },
                { text: 'Yes', onPress: () => console.warn('OK Pressed') },

            ], { cancelable: true, onDismiss: () => console.warn("Dismissed") }
            )

            ToastAndroid.show("the name should be longer than 3 characters", ToastAndroid.SHORT)
        }
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Enter your name here</Text>
            <TextInput
                style={styles.textInput}
                placeholder='eg: Chirag'
                onChangeText={(value) => setName(value)}
                keyboardType='phone-pad'
                maxLength={4}
                secureTextEntry={true}
            />

            {/* <View style={styles.button}>
                <Button
                    title={submitted ? 'Clear' : 'Submit'}
                    onPress={name.length > 0 ? onClickHandler : null}
                    disabled={submitted}
                    color='#f0f '
                />
            </View> */}
            <TouchableOpacity
                style={styles.button}
                onPress={onClickHandler}
                activeOpacity='0.2'>
                <Text style={styles.text}>Submit</Text>


            </TouchableOpacity>

            <TouchableHighlight
                style={styles.button}
                onPress={onClickHandler}
                activeOpacity='0.2'
                underlayColor={'#fff'}>
                {/* can change the color when its touched */}
                <Text style={styles.text}>Submit</Text>


            </TouchableHighlight>

            <TouchableWithoutFeedback
                style={styles.button}
                onPress={onClickHandler}
            >
                {/* dont give the feel of touched also dont accept style if you want to give style then give it to view */}

                <Text style={styles.text}>Submit</Text>


            </TouchableWithoutFeedback>

            <Pressable
                onLongPress={onClickHandler}
                style={styles.button}
                delayLongPress={1000}
                hitSlop={{ top: 10, left: 10 }} //padding outside the box
                android_ripple={{ color: '#0ff' }}
                style={({ pressed }) => [{ backgroundColor: pressed ? '#dddddd' : "#00ff" }, styles.button]}
            >
                {/* dont give the feel of touched also dont accept style if you want to give style then give it to view */}

                <Text style={styles.text}>Long Press</Text>


            </Pressable>

            {
                (submitted && name.length > 0) ? <Text style={styles.text}>Your name is {name}</Text> : null
            }
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',

    },
    textInput: {
        width: "80%",
        borderWidth: 1,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        borderColor: '#f00',
        borderRadius: 20,
        padding: 10,
    },
    button: {
        width: 200,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        backgroundColor: '#F0F',
        borderRadius: 30,
        padding: 10,
    }

})