import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import InputField from "../components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SelectDropDown from "./SelectDropDown";
import * as ImagePicker from "expo-image-picker";
import { profileUpload } from "../services/profileService";


const CreateIssueForm = ({ navigation, dropPin, setIsModalVisible }) => {

  const insets = useSafeAreaInsets();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [issueName, setIssueName] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", issueName);
    formData.append("description", issueDescription);
    formData.append("type", selectedTags[0]);
    formData.append("longitude", dropPin.longitude);
    formData.append("latitude", dropPin.latitude);
    if (image) {
      formData.append("image", {
        uri: image,
        name: "issue.jpg",
        type: "image/jpg",
      });
    }
    setIsLoading(true);

    try {
      await profileUpload(formData);
    } catch (error) {
      setUploadSuccess(false);
      setUploadError("Failed to upload the data. Please try again.");
    }

    setIsLoading(false);
    setIsModalVisible(false);
    console.log("formData", formData);
  };

  const handleTagsChange = (tags) => {
    setSelectedTags(tags);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: insets.top,
        borderColor: "#EEEEEE",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "white",
        opacity: 0.9,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
            fontSize: 22,
          }}
        >
          Please fill all details with coordinates...
        </Text>
        <InputField
          label={"Name Of Issue"}
          icon={<Ionicons size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="text"
          keyboardType="default"
          value={issueName}
          onChangeText={setIssueName}
        />

        <InputField
          label={"Description Of Issue"}
          icon={<Ionicons size={20} color="#666" style={{ marginRight: 5 }} />}
          inputType="text"
          keyboardType="default"
          value={issueDescription}
          onChangeText={setIssueDescription}
        />
        {selectedLocation !== null || undefined || "" ? (
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "white",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text>{selectedLocation?.features[0]?.properties?.formatted}</Text>
          </View>
        ) : (
          <Ionicons
            name="reload-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        )}

        <SelectDropDown selected={selectedTags} setSelected={setSelectedTags} />

        <TouchableOpacity style={{ marginTop: 10, marginBottom: 20 }}>
          <Button title="Pick Image" onPress={() => pickImage()} />
        </TouchableOpacity>
        <View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, borderRadius: 100 }}
              resizeMode={"cover"}
            />
          )}
        </View>
        {!isLoading ? (
          <CustomButton
            label={"Create Issue Now"}
            onPress={handleSubmit}
            loading={isLoading}
          />
        ) : (
          <CustomButton label={"Please Wait..."} loading={isLoading} />
        )}
        {uploadSuccess && (
          <Text style={{ color: "green", textAlign: "center" }}>
            Upload successful!
          </Text>
        )}
        {uploadError && (
          <Text style={{ color: "red", textAlign: "center" }}>
            {uploadError}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateIssueForm;
