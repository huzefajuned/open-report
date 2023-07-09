import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ProfileScreen = () => {
  // Sample data for the related list
  const relatedListData = [
    { id: 1, title: "Related Item 1" },
    { id: 2, title: "Related Item 2" },
    { id: 3, title: "Related Item 3" },
    { id: 4, title: "Related Item 4" },
    { id: 5, title: "Related Item 5" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <FlatList
        data={relatedListData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.relatedItemContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  relatedItemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logoutButton: {
    backgroundColor: "#f4511e",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 24,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
