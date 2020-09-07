import React from 'react'
import LoginForm from './LoginForm'
import { View, StyleSheet } from 'react-native'
import AnotherButton from './AnotherButton'



export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <LoginForm />
            <AnotherButton>LOG IN</AnotherButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        padding : 20,
        height:"100%",
    }
})