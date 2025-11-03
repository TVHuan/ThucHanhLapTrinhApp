import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function HelloScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/react-logo.png")} style={styles.logo} />
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
});
