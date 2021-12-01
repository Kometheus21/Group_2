import React from 'react';
import {Image, Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
            <Image source={{ uri: "https://i.imgur.com/v3kEdl3.jpeg" }} style={{ width: 200, height: 200 }} />

      <Text>Hello, world from Group NR.2 : Valters Kalcenaus</Text>
      <Text>This is my fisrt react native application</Text>
    </View>
  )
}
export default HelloWorldApp;