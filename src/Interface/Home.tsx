import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Navigation";

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Ini Halaman Home</Text>
      <Button title="Ke About" onPress={() => navigation.navigate("About")} />
      <Button title="Ke Setting" onPress={() => navigation.navigate("Setting")} />
    </View>
  );
};

export default Home;
