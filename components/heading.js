import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "900",
        color: "#000",
        marginTop: 20,
        marginBottom: 10,
        textShadowColor: '#ddd',
        textShadowOffset: {
            height: 10,
            width: 10
        },
        textShadowRadius: 0
    },
    div: {
        height: 5,
        width: 100,
        backgroundColor: "#FFA500",
        marginBottom: 20,
    }
})

export default function Heading(props) {
    return (
        <>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.div} />
        </>
    )
}
