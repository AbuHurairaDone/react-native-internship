import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import { lightTheme, darkTheme } from "./theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mode = 'light'
export function HomeScreen() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  

  const handleTodo = async () => {
    if (!todo.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todo,
    };

    setTodos([...todos, newTodo]);
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
    setTodo("");
  };

  const deleteTodo = async (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    await AsyncStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos); 
  };

  const editTodo = (id) => {
      const todoToEdit = todos.find((todo) => todo.id === id);

      if (!todoToEdit) return;

      setTodo(todoToEdit.text);

      const filtered = todos.filter((todo) => todo.id !== id);

      setTodos(filtered);

      AsyncStorage.setItem("todos", JSON.stringify(filtered));
    };
  const loadTodos = async () => {
    const savedTodos = await AsyncStorage.getItem("todos");
    if(savedTodos){
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
    } 
  }
  useEffect(()=>{
    loadTodos()
  },[])

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>TodoList App</Text>

        <TouchableOpacity style={styles.modeBtn}>
          <Text style={styles.modeText}>{mode}</Text>
        </TouchableOpacity>
      </View>

      {/* INPUT SECTION */}
      <View style={styles.todoInputContainer}>
        <TextInput
          placeholder="Enter a Todo..."
          value={todo}
          onChangeText={setTodo}
          placeholderTextColor={
            mode === "light"
              ? lightTheme.placeholder
              : darkTheme.placeholder
          }
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleTodo}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        contentContainerStyle={styles.todosContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoCard}>
              <Text style={styles.todoText}>{item.text}</Text>

              <View style={styles.todoMethods}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => editTodo(item.id)}
                >
                  <Text style={styles.methodText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.delButton}
                  onPress={() => deleteTodo(item.id)}
                >
                  <Text style={styles.methodText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === "light" ? lightTheme.background : darkTheme.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: mode === "light" ? lightTheme.title : darkTheme.title,
  },

  modeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor:
      mode === "light" ? lightTheme.card : darkTheme.card,
  },

  modeText: {
    color: mode === "light" ? lightTheme.text : darkTheme.text,
    fontWeight: "600",
  },

  todoInputContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor:
      mode === "light" ? lightTheme.border : darkTheme.border,
    backgroundColor:
      mode === "light"
        ? lightTheme.inputBackground
        : darkTheme.inputBackground,

    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    color:
      mode === "light" ? lightTheme.inputText : darkTheme.inputText,
    marginBottom: 10,
  },

  button: {
    backgroundColor: lightTheme.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },

  todosContainer: {
    padding: 20,
  },

  todoCard: {
    backgroundColor:
      mode === "light" ? lightTheme.card : darkTheme.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  todoText: {
    flex: 1,
    fontSize: 16,
    color: mode === "light" ? lightTheme.text : darkTheme.text,
  },

  todoMethods: {
    flexDirection: "row",
  },

  editButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
  },

  delButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  methodText: {
    color: "#fff",
    fontWeight: "600",
  },
});