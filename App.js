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
          name="Home"
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
      <View style={styles.goBtn}>
        <Button
          title="Go to List View"
          onPress={() => navigation.navigate("List View")}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Increase count" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.btn}>
        <Button title="Decrease count" onPress={() => setCount(count - 1)} />
      </View>
      <View>
        <Text> Current count: {count}</Text>
        <Text style={styles.line}>
          ___________________________________________________
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBtn: {
    marginBottom: 30, 
    marginLeft: 15,
    marginRight: 15,
  },
  btn: {
    margin: 15,
  },
  line: {
    textAlign: "center",
    color: "grey",
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemCont: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 5,
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
