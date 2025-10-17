import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type SettingNavProp = NativeStackNavigationProp<RootStackParamList, "Setting">;

const Setting = () => {
  const navigation = useNavigation<SettingNavProp>();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  // Warna tema pink-biru lembut
  const colors = {
    pink: "#FADADD",
    blue: "#A7C7E7",
    darkPink: "#F28BB2",
    textDark: "#30475E",
    white: "#FFFFFF",
  };

    function alert(arg0: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? colors.textDark : colors.pink,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? colors.blue : colors.darkPink },
        ]}
      >
        ⚙️ Pengaturan Aplikasi ⚙️
      </Text>

      <View
        style={[
          styles.card,
          { backgroundColor: isDarkMode ? "#547AA5" : colors.blue },
        ]}
      >
        <View style={styles.settingRow}>
          <Text style={[styles.text, { color: colors.white }]}>Mode Gelap</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: colors.pink, true: colors.darkPink }}
            thumbColor={isDarkMode ? colors.white : colors.darkPink}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={[styles.text, { color: colors.white }]}>
            Notifikasi
          </Text>
          <Switch
            value={isNotificationOn}
            onValueChange={setIsNotificationOn}
            trackColor={{ false: colors.pink, true: colors.darkPink }}
            thumbColor={isNotificationOn ? colors.white : colors.darkPink}
          />
        </View>

        <TouchableOpacity
          style={[styles.resetButton, { backgroundColor: colors.darkPink }]}
          onPress={() => alert("✨ Data aplikasi telah direset! ✨")}
        >
          <Text style={styles.resetText}>Reset Data</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.blue }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.buttonText, { color: colors.white }]}>
          Kembali ke Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  resetButton: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  resetText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
