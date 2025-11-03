import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function ChiTietSinhVien() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Thông tin sinh viên</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Họ tên:</Text>
        <Text style={styles.value}>{params.hoTen}</Text>

        <Text style={styles.label}>Lớp:</Text>
        <Text style={styles.value}>{params.lop}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{params.email}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>⬅ Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: "#f0f8ff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: "bold", color: "#555" },
  value: { fontSize: 16, marginBottom: 10, color: "#000" },
  button: { backgroundColor: "#007bff", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
