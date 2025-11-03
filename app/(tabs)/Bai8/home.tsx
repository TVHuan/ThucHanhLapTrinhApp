import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRANG CHỦ BÀI 8</Text>
      <Button title="Xem hồ sơ" onPress={() => router.push("/Bai8/profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold" },
});
