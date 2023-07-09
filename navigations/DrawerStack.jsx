import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={LoginScreen} />
      <Drawer.Screen name="Term&Condition" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
