import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View, Button, } from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="List View" component={FlatListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="View Lists" onPress={() => navigation.navigate('List View')}/>
      <Text></Text>
      <Text></Text>
      <Button title="++" onPress={() =>setCount(count + 1)}/>
      <Text></Text>
      <Button title="--" onPress={() =>setCount(count - 1)}/>
      <Text></Text>
      <Text>    Current count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 5,
    fontSize: 20,
    height: 35,
  },
});

const list = [
  {name: 'John Doe 1' },
  {name: 'John Doe 2' },
  {name: 'John Doe 3' },
  {name: 'John Doe 4' },
  {name: 'John Doe 5' },
]

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

export default MyStack;