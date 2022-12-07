import * as React from "react";
import Home from "../Screens/Home";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Call from "../Screens/Call";
import History from "../Screens/History";
import Credit from "../Screens/Credit";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Credit}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="catelogue"
        component={History}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="category"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Call}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="shopping-cart"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
