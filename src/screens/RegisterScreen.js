import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import UserForm from './UserForm'
import AnotherButton from './AnotherButton'
import { CreateUser } from './UserHandler'
import VerticalSeparator from './VerticalSeparator'
import CheckBox from '@react-native-community/checkbox';
import AnotherTextInput from './AnotherTextInput'

export default function RegisterScreen({navigation}) {
    const [user , setUser] = useState({})

    const [passwordTwo , setPasswordTwo] = useState(null)

    const [nameError , setNameError] = useState("")
    const [fullnameError , setFullnameError] = useState("")
    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")
    const [passwordTwoError , setPasswordTwoError] = useState("")

    const [registerDisabled , setRegisterDisabled] = useState(true)

    const [agreedTOS , setAgreedTOS] = useState(false)

    useEffect(()=>{
        user.name == "" ? setNameError("Username is required ") : setNameError("")
        user.fullname == "" ? setFullnameError("Fullname is required") : setFullnameError("") 
        user.password == "" ? setPasswordError("Password is required") : setPasswordError("")
        user.email == "" ? setEmailError("Email is required") : setEmailError("")
        
        if(!user.name || !user.email || !user.password || !user.fullname || agreedTOS == false ) {
            setRegisterDisabled(true)
        } else {
            setRegisterDisabled(false)
        }

        if(user.password != passwordTwo) {
            setPasswordTwoError("Password not same")
        } else {
            setPasswordTwoError("")
        }


    },[user,agreedTOS,passwordTwo])
    function onRegister(user) {
        return ()=> {
            CreateUser(user).then((resp)=>{
                
            })    
        }
    }
    return (
        <View style={styles.container}>
            <UserForm 
                nameError={nameError}
                fullnameError={fullnameError}
                emailError={emailError}
                passwordError={passwordError}
                onChange={(data)=>{
                    setUser(data)
                }}/>

            <AnotherTextInput 
                secureTextEntry={true}
                errorText={passwordTwoError}
                onChangeText={(text)=>{
                    setPasswordTwo(text)
                }}
                placeholder={"Confirm password"}/>

            <VerticalSeparator height={10} />

            <View style={{flexDirection:"row"}}>
                <CheckBox
                    onValueChange={(v)=>{setAgreedTOS(v)}} 
                    value={agreedTOS}/> 
                <Text style={{marginTop:5}}>I have read and agree to the term and condition</Text>
            </View>
            <VerticalSeparator height={15} />
            <AnotherButton
                disabled={registerDisabled}
                onPress={onRegister(user)}>
                REGISTER
            </AnotherButton>
            <VerticalSeparator height={10} />
            <View
                style={{
                    justifyContent : "center",
                    flexDirection : "row",
                }}>
                <Text>
                    Already have an account ?  
                </Text>
                <Text
                        style={{
                            fontWeight:"bold",
                            marginLeft : 5,
                            color : "#167",
                        }}
                        onPress={()=>{
                            navigation.navigate("Login")
                        }}> 
                        Sign In
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        height : "100%",
        padding : 20,
    }
})