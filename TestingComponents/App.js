//Structure and Basic Componens in app #5
//hooks

import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [name, setName] = useState('Chirag') //hooks
  const [session, setSession] = useState({number: 5, title: 'Chirag'})
  const [current, setCurrent] = useState(true)
  const [count, setcount] = useState(0)

  var onClickHandler = ()=>{
    setName('Chirag')
    setSession({number: 3, title: "A"})
    setCurrent(false)
    setcount(count+5)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text} >This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current? 'currentSession' : 'nextSession'}</Text>
      <Text style={styles.text}>You clicked {count} times</Text>
      {/* <Button title='Open YouTube' onPress={()=>{Linking.openURL('https://youtube.com')}}></Button> */}
      <View style={styles.button}>
      <Button title='Change Name' onPress={onClickHandler} style={styles.button}></Button>

      </View>
      {/* button not have style so put in view */}
      <StatusBar style="auto" />
    </View>
  );
}
//flex is just like weight
//flex-direction: column, column-reverse, row, row-reverse

//width:"100%" height:"50%"
//width:100 height:21 (this will be in px)
//flex :1(full margin and width)
const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"50%",
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#f0f',
    borderWidth: 10,
    borderRadius: 10,
  },
  text:{
    color: '#000',
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 20,
    textTransform: 'capitalize' //none, uppercase, lowercase, capitalize
  },
  button:{
    width: 150,
    height: 100,
  }
});