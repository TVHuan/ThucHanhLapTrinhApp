import { router } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Xin chào React Native!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Bai2")}>
        <Text style={styles.buttonText}>Bài 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/hello")}>
        <Text style={styles.buttonText}>Bài 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/profile")}>
        <Text style={styles.buttonText}>Bài 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/diemTrungBinh")}>
        <Text style={styles.buttonText}>Bài 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/mauNen")}>
        <Text style={styles.buttonText}>Bài 6</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/todo")}>
        <Text style={styles.buttonText}>Bài 7</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/Bai8/home")}>
        <Text style={styles.buttonText}>Bài 8</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/Bai9/home")}>
        <Text style={styles.buttonText}>Bài 9</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/Bai10")}>
        <Text style={styles.buttonText}>Bài 10</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
