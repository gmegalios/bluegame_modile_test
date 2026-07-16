import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fb" />
      <View style={styles.container}>
        <Text style={styles.eyebrow}>Test App</Text>
        <Text style={styles.title}>Simple One-Screen React Native App</Text>
        <Text style={styles.subtitle}>
          Use this page to quickly test layout, input, and button behavior.
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Type anything here"
          placeholderTextColor="#7a869a"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount((current) => current + 1)}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Tap Me</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Hello</Text>
          <Text style={styles.cardValue}>{name.trim() || "Tester"}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Button taps</Text>
          <Text style={styles.cardValue}>{count}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "center",
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4f6b95",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#14213d",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4f5d75",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d7dfeb",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#14213d",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1f6feb",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6c7a92",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#14213d",
  },
});
