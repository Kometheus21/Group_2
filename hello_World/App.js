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
            <Image source={{ uri: "https://i.imgur.com/30oqq8Y.png" }} style={{ width: 300, height: 160 }} />

      <Text>Hello, world from Group NR.2 : Mārcis Engers</Text>
      <Text>This is my Marcis Engers fisrt react native application</Text>
    </View>
  )
}
export default HelloWorldApp;