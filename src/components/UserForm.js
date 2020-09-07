import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { View , StyleSheet, Button ,Text, ToastAndroid} from 'react-native';
import AnotherTextInput from './AnotherTextInput';



// UserForm returns the inserted user's fields to the parent by calling oncChange callback
export default function UserForm({
        onChange , nameError , fullnameError , emailError , passwordError,
        ...props
    }) {
    const [name , setName] = useState(props.name != null ? props.name : null)
    const [fullname , setFullname] = useState(props.fullname != null ? props.fullname : null)
    const [email , setEmail] = useState(props.email != null ? props.email : null)
    const [password , setPassword] = useState(props.password != null ? props.password : null)
    const [data, setData] = useState({})
    useEffect(()=>{
        if(onChange != null) {
            const user = {
                name : name,
                fullname : fullname,
                password : password,
                email : email
            }
            onChange(user)
        }
    },[name,fullname,email,password])

    return (
        <View>
            <AnotherTextInput
                onChangeText={(text)=>{
                    setName(text)
                }}
                errorText={nameError}
                placeholder={"Username"}
                defaultValue={name} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <AnotherTextInput
                onChangeText={(text)=>{
                    setFullname(text)
                }}
                errorText={fullnameError}
                defaultValue={fullname}
                placeholder={"Fullname"} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <AnotherTextInput
                onChangeText={(text)=>{
                    setEmail(text)
                }}            
                defaultValue={email}
                errorText={emailError}
                placeholder={"Email"} 
                style={styles.textInput} />
            <View style={styles.whiteSeparator}/>
            <AnotherTextInput
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                errorText={passwordError}            
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