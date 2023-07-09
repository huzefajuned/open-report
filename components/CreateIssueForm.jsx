import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Button, Image } from "react-native";
import InputField from "../components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SelectDropDown from "./SelectDropDown";
// import SelectImage from "./SelectImage";
import { api_key, reverseGeoCodeAPI } from "../services/url";
import * as ImagePicker from "expo-image-picker";

const CreateIssueForm = ({ navigation, dropPin }) => {
  const insets = useSafeAreaInsets();
  const [selectedLocation, setSelectedLocation] = useState();

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,    
    });
    console.log(result)
    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const getReverseGeoCode = async () => {
    return;
    try {
      const geoDataResponse = await fetch(
        `${reverseGeoCodeAPI}?lat=${dropPin?.latitude}&lon=${dropPin?.longitude}&apiKey=${api_key}`
      );
      const data = await geoDataResponse.json();
      setSelectedLocation(data);
    } catch (error) {
      console.error("Error occured while doing a reverse geo search");
      console.error(error);
    }
  };

  useEffect(() => {
    getReverseGeoCode();
  }, []);
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
          Please fill all detals with coordinates...
        </Text>

        <InputField
          label={"Name Of Issue"}
          icon={<Ionicons size={20} color="#666" style={{ marginRight: 5 }} />}
        />
        <InputField
          label={"Description Of Issue"}
          icon={
            <Ionicons
              // name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
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

        <SelectDropDown />
        {image && (
          <Image source={{ uri: image }} style={{ flex: 1, width: 600 }} />
        )}
        <Button title="Pick Image" onPress={pickImage} />
        <CustomButton label={"Create Issue Now"} onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateIssueForm;
