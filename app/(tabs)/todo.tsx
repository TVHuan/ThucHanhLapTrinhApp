import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>
      <TextInput style={styles.input} placeholder="Nhập công việc..." value={task} onChangeText={setTask} />
      <Button title="Thêm" onPress={addTask} />

      <FlatList
        style={{ marginTop: 20, width: "90%" }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onLongPress={() => removeTask(index)} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
            <Text style={styles.delete} onPress={() => removeTask(index)}>
              xóa
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff", paddingTop: 60 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, width: "90%", padding: 8, marginBottom: 10 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: { fontSize: 16 },
  delete: { color: "red", fontWeight: "bold" },
});
