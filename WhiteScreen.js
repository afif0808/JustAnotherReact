import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function WhiteScreen({}) {
    return (
        <View styles={styles.container}>
            <children/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#fff",
        height : "100%",
    }
})