import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const CustButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            style={styles.button}
            delayLongPress={1000}
            hitSlop={{ top: 10, left: 10 }} //padding outside the box
            android_ripple={{ color: '#00f' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            {/* dont give the feel of touched also dont accept style if you want to give style then give it to view */}

            <Text style={styles.text}>{props.title}</Text>


        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },

})

export default CustButton;