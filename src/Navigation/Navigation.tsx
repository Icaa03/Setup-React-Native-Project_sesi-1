import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Interface/Home";
import About from "../Interface/About";
import Setting from "../Interface/Setting";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#A7C7E7" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "Kalkulator IMT" }} />
        <Stack.Screen name="About" component={About} options={{ title: "Tentang Aplikasi" }} />
        <Stack.Screen name="Setting" component={Setting} options={{ title: "Pengaturan" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
