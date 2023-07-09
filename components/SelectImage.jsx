import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from "react-native-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

const selectImage = () => {
  const [profilePicture, setProfilePicture] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const launchImageLibraryOptions = {
    maxWidth: 512,
    maxHeight: 512,
    quality: 0.5,
    selectionLimit: 1,
    mediaType: "photo",
  };
  const changeProfilePicture = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response.assets);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.assets.uri };
        console.log("response", JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri);
      }
    });
  };
  return (
    // <View style={styles.container}>
    //   <Button title="Select Image" onPress={selectImage} />
    //   {/* {imageSource && <Image source={imageSource} style={styles.image} />} */}
    // </View>

    <TouchableOpacity onPress={() => changeProfilePicture()}>
      {profilePicture === undefined ? (
        <Ionicons
          name="cloud-upload"
          size={30}
          color="#666"
          style={{ marginRight: 5 }}
        />
      ) : (
        <Ionicons
          name="person-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default selectImage;
