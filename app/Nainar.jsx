import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={styles.container}
        >
            <Text>hello nainar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
