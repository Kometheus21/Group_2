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
      <Text>Hello world from Group NR.2: Kristers Keits Skrebs</Text>
      <Text>This is my Kristers Keits Skrebs first react native application</Text>
            
      <Image source={require('./assets/english-cucumber.jpg')} style={{ width: 200, height: 150 }} />
    </View>
  )
}
export default HelloWorldApp;