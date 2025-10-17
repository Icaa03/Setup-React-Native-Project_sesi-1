import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type AboutNavProp = NativeStackNavigationProp<RootStackParamList, "About">;

const About = () => {
  const navigation = useNavigation<AboutNavProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💗 Tentang Aplikasi 💗</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Aplikasi <Text style={styles.bold}>Kalkulator IMT</Text> membantu
          pengguna menghitung Indeks Massa Tubuh dengan mudah dan cepat.
        </Text>
        <Text style={styles.text}>
          Cukup masukkan berat dan tinggi badan, tekan tombol “Hitung IMT”, dan
          hasil akan muncul dengan kategori kesehatan kamu!
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FADADD",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6B5B95",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffffff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    color: "#30475E",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#89CFF0",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
