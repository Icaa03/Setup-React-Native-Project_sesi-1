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
      <Text style={styles.judul}>📐 Kalkulator Luas Persegi</Text>

      <View style={styles.squareBox}>
        <Text style={styles.squareText}>Persegi</Text>
      </View>

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
        <Text style={styles.hasil}>Luas: {hasil}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  judul: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1565c0",
  },
  squareBox: {
    width: 120,
    height: 120,
    backgroundColor: "#64b5f6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#1565c0",
    marginBottom: 25,
    borderRadius: 12,
    elevation: 6, // shadow untuk Android
  },
  squareText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#1565c0",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  tombol: {
    backgroundColor: "#1565c0",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
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
