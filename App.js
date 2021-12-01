import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/640px-ICloud_logo.svg.png")}
        style={styles.imageStyle}
      ></Image>
      <Text style={styles.heading}>Hello world!</Text>
      <Text style={styles.paragraph}>
        Hello world from group 2! Member:{" "}
        <Text style={{ fontWeight: "700" }}>Viesturs Kalcenaus</Text>
      </Text>
      <Text style={styles.paragraph}>
        This is my Viesturs Kalcenaus, first React Native application! Nice to
        see You here!
      </Text>

      <Image
        source={require("./assets/shrek.png")}
        style={styles.roundImageStyle}
      ></Image>
      <Text style={styles.heading}>Viesturs Kalcenaus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 70,
    width: 110,
  },
  roundImageStyle: {
    borderRadius: 200,
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 16,
    color: "grey",
    fontWeight: "700",
    padding: 20,
  },
  paragraph: {
    marginRight: 50,
    marginLeft: 50,
    alignContent: "flex-start",
    fontSize: 14,
    color: "grey",
    padding: 20,
  },
});
