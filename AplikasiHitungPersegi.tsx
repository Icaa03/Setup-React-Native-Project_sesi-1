import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [sisi, setSisi] = useState("");
  const [hasil, setHasil] = useState<number | null>(null);

  const hitungLuas = () => {
    const nilai = parseFloat(sisi);
    if (!isNaN(nilai)) {
      setHasil(nilai * nilai);
    } else {
      setHasil(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kalkulator Luas Persegi</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang sisi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={setSisi}
      />

      <TouchableOpacity style={styles.tombol} onPress={hitungLuas}>
        <Text style={styles.textTombol}>Hitung</Text>
      </TouchableOpacity>

      {hasil !== null && (
        <Text style={styles.hasil}>Luas Persegi: {hasil}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  tombol: {
    backgroundColor: "#ff4081",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textTombol: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  hasil: {
    fontSize: 20,
    marginTop: 20,
    color: "#333",
  },
});
