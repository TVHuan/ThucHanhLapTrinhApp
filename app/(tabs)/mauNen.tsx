import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

export default function ChangeColorScreen() {
  const [color, setColor] = useState("#ffcc00");

  const randomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${hex}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title="Đổi màu nền" onPress={randomColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
