import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack";

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
