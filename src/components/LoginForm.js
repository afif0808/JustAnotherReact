import React, { useState, useEffect } from 'react'
import {StyleSheet,View, Text , TextInput, Button, Keyboard } from 'react-native'
import AnotherTextInput from './AnotherTextInput.js'
import AnotherButton from './AnotherButton.js'


// LoginForm Returns the inserted username and password to the parent by calling handleFormChange callback 
export default function LoginForm({handleFormChange ,...props}) {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [data,setData] = useState({})

    useEffect(()=>{
        data.name = name
        data.password = password
        if(handleFormChange != null) {
            handleFormChange(data)
        }
    },[name,password])
    
    function handleLogIn(data) {
        if(props.handleLogIn != null) {
            props.handleLogIn(data)
        }
    }


    const navigation = props.navigation
    return (
        <View style={styles.container}>
            <AnotherTextInput
                placeholder={"Username"}
                onChangeText={(text)=>{
                    setName(text)
                }}/>   
            <View style={styles.whiteSeparator}/>         
            <AnotherTextInput 
                secureTextEntry={true}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                placeholder={"Password"}/>
            <View style={styles.whiteSeparator}/>  
         
        </View>
    )    
}
const styles = StyleSheet.create({
    container : {
    },
    lineSeparator : {
        margin : 5,
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
    },
    whiteSeparator : {
        margin : 5,
    }
});
  