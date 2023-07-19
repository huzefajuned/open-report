import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const navigator = useNavigation();

  return (
    <SafeAreaView style={([styles.container], { paddingTop: insets.top })}>
      <View style={styles.userInfoSection}>
        <TouchableOpacity style={styles.titleBar}>
          <Ionicons
            name="arrow-back"
            size={25}
            color="#52575D"
            onPress={() => navigator.navigate("MapScreen")}
          ></Ionicons>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Kolkata, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => navigator.navigate("MyIssuesScreen")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>My Issues</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Button title="Logout" color="gray" style={{ width: "100%" }} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
