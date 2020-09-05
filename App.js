import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';

import LoginForm from './LoginForm.js'
import UserForm from './UserForm.js'
import LoginScreen from './LoginScreen.js';
import WhiteScreen from './WhiteScreen.js';
import RegisterScreen from './RegisterScreen.js';
import AnotherTextInput from './AnotherTextInput.js';


const Stack = createStackNavigator()

function Another(props) {
  const [data , setData] = useState(null)
  return (
    <View>
      <LoginForm  
        handleFormChange={(data)=>{
          setData(data)
        }} />
      <Button 
        title={"LOGIN"} 
        onPress={()=>{
          const req = {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              name : data.name,
              password : data.password,
            })
          }
          fetch("http://samasecentro.com:777/login",req).then(resp => resp.json()).then((resp)=>{
            console.log(resp.token)
          })

        }}/>
    </View>
  )
}

export default function App() {
  const [err ,setErr] = useState("")
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name={"Register"}
            component={RegisterScreen}/>
          <Stack.Screen
            name={"Login"}
            options={{title : "Samase"}}
            component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
