import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import StackNavigator from "./StackNavigator";
// import ProfileScreen from "./ProfileScreen";
import AuthStack from "./AuthStack";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={<AuthStack />} />
      <Drawer.Screen
        name="Profile"
        component={
          <>
            <View>
              <Text></Text>Profile
            </View>
          </>
        }
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
