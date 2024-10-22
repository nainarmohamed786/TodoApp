
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ itemData, onDeleteData }) => {
    return (
        <View style={styles.goalListedContainer}>
            <Pressable style={({ pressed }) => pressed && styles.press} onPress={onDeleteData}>
                <Text style={styles.goalTexted}>{itemData.index + 1}. {itemData.item}</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    goalListedContainer: {
        marginTop: 8,
        backgroundColor: "#5e0acc",
        borderRadius: 10
    },
    goalTexted: {
        color: "white",
        margin: 8,
        padding: 8
    },
    press: {
        opacity: 0.5
    }
})

export default GoalItem