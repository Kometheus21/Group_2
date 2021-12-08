import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home "
          component={HomeScreen}
          options={{ title: "React application" }}
        />
        <Stack.Screen name="List View" component={FlatListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Go to List View"  color = "green"
          onPress={() => navigation.navigate("List View")}
        />
      </View>
      <View style={styles.button}>
        <Button title="increase count"  color = "green" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.button}>
        <Button title="decrease count" color = "green" onPress={() => setCount(count - 1)} />
      </View>
      <View>
        <Text> Current count: {count}</Text>
        <Text style={styles.decor}>
          ...................................................................
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin : 15,
  },
  
  decor: {
    textAlign: "center",
    color: "green",
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  item: {
    padding: 14,
    fontSize: 25,
    color : "white",
  },
  itemCont: {
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 4,
    margin: 8,
  },
});

const list = [
  { name: "John Doe 1" },
  { name: "John Doe 2" },
  { name: "John Doe 3" },
  { name: "John Doe 4" },
  { name: "John Doe 5" },
];

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.itemCont}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyStack;
