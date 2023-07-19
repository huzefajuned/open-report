import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { listIssuesForUser } from "../services/issueServices";
const MyIssuesScreen = () => {
  const insets = useSafeAreaInsets();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    listIssuesForUser().then((issues) => {
      setIssues(issues);
    });
  });

  const renderItem = ({ item }) => (
    <View style={styles.issueItem}>
      <View style={styles.card}>
        <View style={{ width: "70%" }}>
          <Text style={styles.issueName}>{item.name}</Text>
          <Text style={styles.issueDate}>Created on: {item.createdAt}</Text>
          <Text style={styles.issueStatus}>Status: {item.status}</Text>
          <Text style={styles.issueStatus}>Vote Count: {item.voteCount}</Text>
        </View>
        <View
          style={{
            width: "30%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image
            source={{
              uri: item?.mediaURLs[0],
            }}
            style={styles.issueImage}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={([styles.container], { paddingTop: insets.top })}>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 25,
            padding: 5,
          }}
        >
          All Issues
        </Text>
      </View>
      <FlatList
        key={issues}
        data={issues}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  issueItem: {
    // marginBottom: 20,
    alignItems: "center",
    padding: 10,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4E4FEB",
    borderRadius: 8,
    padding: 16,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  issueName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  issueDate: {
    color: "gray",
    marginBottom: 5,
    color: "white",
  },
  issueStatus: {
    color: "white",

    // fontStyle: "italic",
  },
  issueImage: {
    width: 80,
    height: 80,
  },
});

export default MyIssuesScreen;
