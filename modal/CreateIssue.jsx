import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import CreateIssueForm from "../components/CreateIssueForm";

const CreateIssue = ({ isModalVisible, setIsModalVisible,dropPin }) => {
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        customBackdrop={<View style={{ flex: 1 }} />}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text
            onPress={() => setIsModalVisible(false)}
            style={{
              fontSize: 25,
              textAlign: "center",
              justifyContent: "center",
              color: "white",
              color: "white",
              backgroundColor: "lightgray",
              borderRadius: 50,
              width: "20%",
            }}
          >
            X
          </Text>
        </TouchableOpacity>

        <CreateIssueForm  dropPin={dropPin}/>
      </Modal>
    </View>
  );
};

export default CreateIssue;
