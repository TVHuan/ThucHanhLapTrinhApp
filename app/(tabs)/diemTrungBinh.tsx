import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AverageScreen() {
  const [toan, setToan] = useState("");
  const [ly, setLy] = useState("");
  const [hoa, setHoa] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const tinhDiem = () => {
    const t = parseFloat(toan) || 0;
    const l = parseFloat(ly) || 0;
    const h = parseFloat(hoa) || 0;
    setResult((t + l + h) / 3);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính điểm trung bình</Text>

      <TextInput
        placeholder="Điểm Toán"
        keyboardType="numeric"
        style={styles.input}
        value={toan}
        onChangeText={setToan}
      />
      <TextInput placeholder="Điểm Lý" keyboardType="numeric" style={styles.input} value={ly} onChangeText={setLy} />
      <TextInput placeholder="Điểm Hóa" keyboardType="numeric" style={styles.input} value={hoa} onChangeText={setHoa} />

      <Button title="Tính điểm" onPress={tinhDiem} />
      {result !== null && <Text style={styles.result}>Điểm TB: {result.toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, width: "80%", padding: 8, marginVertical: 6 },
  result: { fontSize: 18, marginTop: 10, color: "blue" },
});
