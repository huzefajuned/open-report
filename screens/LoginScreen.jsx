import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginSVG from "../assets/images/misc/login.svg";
import GoogleSVG from "../assets/images/misc/google.svg";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", paddingTop: insets.top }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}></View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#4E4FEB",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={"Login"}
          onPress={() => {
            navigation.navigate("MapScreen");
          }}
        />

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Ionicons name="logo-google" size={40} color="#4E4FEB" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Ionicons
              name="logo-facebook"
              size={40}
              color="#4E4FEB"
              // style={{ transform: [{ rotate: "2deg" }] }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text
              style={{ color: "#4E4FEB", fontWeight: "700", marginLeft: 5 }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
