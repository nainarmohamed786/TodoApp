import { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, FlatList } from "react-native";
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { StatusBar } from "expo-status-bar";

export default function Index() {

  const [goals, setGoals] = useState([]);
  const [modl, setModal] = useState(false);

  function goalListed(goalText) {
    setGoals((currentState) => [...currentState, goalText]);

  }
  function deleteItem(index) {
    console.log(index)
    const newGoals = goals.filter((el, i) => i !== index);
    setGoals(newGoals)
  }

  function AddNewModalHandler() {
    setModal(true)
  }

  function closeModalHandler() {
    setModal(false)
  }

  return (
    <>
      <StatusBar style={"dark"} />
      <View
        style={styles.container}>

        <Button title="Add New Goals" onPress={AddNewModalHandler} color={"#f31282"} />

        <GoalInput visible={modl} goalListed={goalListed} onClose={closeModalHandler} />

        <View style={styles.ListContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem itemData={itemData} onDeleteData={() => deleteItem(itemData.index)} />
              )
            }}
          />
        </View>

      </View>
    </>

  );
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#1A0037"
  },

  ListContainer: {
    flex: 4
  },

})
