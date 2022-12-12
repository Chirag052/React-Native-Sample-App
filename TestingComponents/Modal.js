import React, { useState } from 'react'
import { Text, TextInput, StatusBar, View, Image, StyleSheet, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid, Modal } from 'react-native'
import CustButton from './customComponents/CustomButton'

export default function App() {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [showWarning, setShowWarning] = useState(false)


    const onClickHandler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted)
        } else {
            setShowWarning(true)
        }
    }
    return (
        <View style={styles.body}>
            <Modal
                visible={showWarning}
                onRequestClose={() => setShowWarning(false)}
                transparent
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_model}>
                        <View style={styles.warning_title}>
                            <Text style={styles.text}>WARNING!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.text}>The name must be longer than 3 characters</Text>
                        </View>
                        <Pressable
                            onPress={() => setShowWarning(false)}
                            style={styles.warning_button}
                        >
                            <Text style={styles.text}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.text}>Enter your name here</Text>
            <TextInput
                style={styles.textInput}
                placeholder='eg: Chirag'
                onChangeText={(value) => setName(value)}
                keyboardType='phone-pad'
                maxLength={4}
                secureTextEntry={true}
            />

            {/* <Pressable
                onPress={onClickHandler}
                style={styles.button}
                delayLongPress={1000}
                hitSlop={{ top: 10, left: 10 }} //padding outside the box
                android_ripple={{ color: '#00f' }}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
                    styles.button
                ]}
            >*/}
            {/* dont give the feel of touched also dont accept style if you want to give style then give it to view */}

            {/* <Text style={styles.text}>Submit</Text>

            </Pressable>  */}
            <CustButton
                onPressFunction={onClickHandler}
                title={submitted ? 'Clear' : 'Submit'}
                color={'#ff00ff'}
                style={{ margin: 14 }}

            />

            {
                (submitted && name.length > 0) ?
                    <Text style={styles.text}>Your name is {name}</Text>
                    :
                    <Image source={require('./assets/success.png')} style={styles.image} resizeMode='stretch' blurRadius={3} />

            }
            <StatusBar style="auto" />
        </View>

    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    textInput: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_model: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning_button: {
        backgroundColor: '#00ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: 100,
        height: 100,
    }
});