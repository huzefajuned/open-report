import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CreateIssueFormModal from "../modal/CreateIssue";
import { listIssuesByCoordinate } from "../services/issueServices";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MapScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [currentLocation, setCurrentLocation] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [issueMarkers, setIssueMarkers] = useState([]);

  const [dropPin, setDroppedPin] = useState(null);
  // console.log("dropPin", dropPin);

  useEffect(() => {
    // Fetch the user's current location when the component mounts
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCurrentLocationPress = () => {
    // Center the map on the user's current location
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  useEffect(() => {
    (async function () {
      if (currentLocation) {
        listIssuesByCoordinate(
          currentLocation.latitude,
          currentLocation.longitude
        ).then((issuesMarkerData) => {
          setIssueMarkers(issuesMarkerData);
        });
      }
    })();
  }, [currentLocation]);

  const mapRef = React.useRef(null);

  return (
    <SafeAreaView style={{ paddingTop: insets.top }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.backIconContainer}>
          <Icon
            name="menu-outline"
            style={styles.backIcon}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.avatarIconContainer}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Icon name="person" style={styles.avatarIcon} />
        </TouchableOpacity>
      </View>
      <MapView
        shows
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(event) => {
          setDroppedPin(event.nativeEvent.coordinate);
          setIsModalVisible(true);
        }}
        showsMyLocationButton={false}
      >
        {issueMarkers.map((marker, index) => {
          const coords = {
            longitude: marker.location.coordinates[0],
            latitude: marker.location.coordinates[1],
          };
          return (
            <Marker
              key={index}
              coordinate={coords}
              title={marker.name}
              description={marker.description}
            >
              <MaterialIcons name="emoji-flags" size={50} color="red" />
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.iconBottomContainer}>
        <TouchableOpacity
          style={styles.currentLocationIconContainer}
          onPress={handleCurrentLocationPress}
        >
          <Icon name="locate-outline" style={styles.currentLocationIcon} />
        </TouchableOpacity>
      </View>
      <CreateIssueFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        dropPin={dropPin}
      />
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },

  iconContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBottomContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  backIconContainer: {
    top: 50,
    left: 20,
  },
  backIcon: {
    fontSize: 25,
    color: "white",
    backgroundColor: "lightgray",
    borderRadius: 50,
    padding: 8,
  },
  avatarIconContainer: { top: 50, right: 20 },
  avatarIcon: {
    fontSize: 25,
    color: "white",
    backgroundColor: "lightgray",
    borderRadius: 50,
    padding: 8,
  },
  currentLocationIconContainer: {
    bottom: 20,
    right: 20,
  },
  currentLocationIcon: {
    fontSize: 25,
    color: "white",
    backgroundColor: "#068FFF",
    borderRadius: 50,
    padding: 8,
  },
});

export default MapScreen;
