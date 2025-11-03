import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("@/assets/images/avatar.jpg")} style={styles.avatar} />
        <Text style={styles.name}>Tạ Văn Huấn</Text>
        <Text style={styles.job}>Lập trình viên React Native</Text>
        <Text style={styles.contact}>tahuan1906@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  job: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  contact: {
    fontSize: 14,
    color: "#888",
    marginTop: 8,
  },
});
