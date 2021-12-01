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
            <Image source={{ uri: "https://p.favim.com/orig/2018/07/13/alien-drunk-smoke-Favim.com-6035351.jpg" }} style={{ width: 200, height: 360 }} />

      <Text>Hello world! from Group Nr.2</Text>
      <Text>This is Rudolfs Andrejs Andersons</Text>
      <Text>and it's my 1st react native application wow</Text>
    </View>
  )
}
export default HelloWorldApp;