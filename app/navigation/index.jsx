import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./BottomNavigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default Navigation;