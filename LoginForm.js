import React, { useState, useEffect } from 'react'
import {StyleSheet,View, Text , TextInput, Button, Keyboard } from 'react-native'




export default function LoginForm(props) {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [data,setData] = useState({})

    useEffect(()=>{
        data.name = name
        data.password = password
        if(props.handleFormChange != null) {
            props.handleFormChange(data)
        }
    },[name,password])


    function handleLogIn(data) {
        if(props.handleLogIn != null) {
            props.handleLogIn(data)
        }
    }

    



    const navigation = props.navigation
    return (
        <View>
            <TextInput
                placeholder={"Username"}
                style={styles.textInput}
                onChangeText={(text)=>{
                    setName(text)
                }}/>   
            <View style={styles.whiteSeparator}/>         
            <TextInput 
                secureTextEntry={true}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                placeholder={"Password"}
                style={styles.textInput}/>
            <View style={styles.whiteSeparator}/>         
        </View>
    )    
}
const styles = StyleSheet.create({
    textInput : {
        borderWidth : 1,
        borderColor:"#ccc",
        padding : 10,
        width : "100%",
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
  