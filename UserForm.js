import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { View , StyleSheet, Button ,Text, ToastAndroid} from 'react-native';



export default function UserForm(props) {
    const [name , setName] = useState("")
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [data, setData] = useState({})
    useEffect(()=>{
        data.name = name
        data.fullName = fullName
        data.password = password
        data.email = email
    },[name,fullName,email,password])

    return (
        <View>
            <TextInput
                onChangeText={(text)=>{
                    setName(text)
                }}
                placeholder={"Username"}
                defaultValue={name} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <TextInput
                onChangeText={(text)=>{
                    setFullName(text)
                }}
                defaultValue={fullName}
                placeholder={"Fullname"} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <TextInput
                onChangeText={(text)=>{
                    setEmail(text)
                }}            
                defaultValue={email}
                placeholder={"Email"} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <TextInput
                onChangeText={(text)=>{
                    setPassword(text)
                }}            
                defaultValue={password}
                secureTextEntry={true}
                placeholder={"Password"} 
                style={styles.textInput} />
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