import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = ({ goalListed, visible, onClose }) => {

    const [goalText, setGoalText] = useState("");

    function goalHandler(word) {
        setGoalText(word)
    }

    function addGoalHandler() {
        goalListed(goalText);
        onClose()
    }


    return (
        <Modal visible={visible}>
            <View style={styles.ViewContainer}>
                <Image source={require('../assets/images/adaptive-icon.png')} style={styles.image} />
                <TextInput style={styles.input} placeholder="Type your goals" onChangeText={goalHandler} />
                <View style={styles.buttonContainer}>


                    <View style={styles.buttons}>
                        <Button title="Cancel" color={"#f31282"} onPress={onClose} />
                    </View>

                    <View style={styles.buttons}>
                        <Button title="Add Goals" color={"#5e0acc"} onPress={addGoalHandler} />
                    </View>

                </View>

            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    ViewContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#ccccc",
        padding: 16,
        backgroundColor: "#1A0037"
    },
    input: {
        borderWidth: 1,
        padding: 5,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#e4d0ff"
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttons: {
        marginHorizontal: 16,
        marginVertical: 20,
        width: 100
    },
    image: {
        width: 150,
        height: 150,
        margin: 20
    }
})

export default GoalInput