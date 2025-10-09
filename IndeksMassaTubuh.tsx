import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const App: React.FC = () => {
  const [berat, setBerat] = useState<string>("");
  const [tinggi, setTinggi] = useState<string>("");
  const [hasil, setHasil] = useState<string | null>(null);
  const [kategori, setKategori] = useState<string>("");

  const hitungIMT = () => {
    const beratNum = parseFloat(berat);
    const tinggiNum = parseFloat(tinggi);

    if (isNaN(beratNum) || isNaN(tinggiNum) || tinggiNum === 0) {
      setHasil("Masukkan angka yang valid!");
      setKategori("");
      return;
    }

    const tinggiMeter = tinggiNum / 100;
    const imt = beratNum / (tinggiMeter * tinggiMeter);
    setHasil(imt.toFixed(2));

    if (imt < 18.5) setKategori("Kurus");
    else if (imt < 24.9) setKategori("Normal");
    else if (imt < 29.9) setKategori("Kelebihan berat badan");
    else setKategori("Obesitas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💗 Kalkulator IMT 💗</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Berat Badan (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 50"
          keyboardType="numeric"
          value={berat}
          onChangeText={setBerat}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tinggi Badan (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 160"
          keyboardType="numeric"
          value={tinggi}
          onChangeText={setTinggi}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={hitungIMT}>
        <Text style={styles.buttonText}>Hitung IMT</Text>
      </TouchableOpacity>

      {hasil && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>IMT Anda: {hasil}</Text>
          <Text style={styles.category}>Kategori: {kategori}</Text>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E9EB", // pink pastel keabu-abuan
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#B85C7A", // rose pink
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#A67C8D", // abu keunguan lembut
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D8BFC4", // pink abu muda
    borderRadius: 15,
    padding: 12,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E8A0B0", // soft pink
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#E8A0B0",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultBox: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#F1D5DA", // lembut, pastel pink abu
    padding: 20,
    borderRadius: 15,
    width: "80%",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9E5672",
  },
  category: {
    fontSize: 18,
    marginTop: 8,
    color: "#B07284",
  },
});
