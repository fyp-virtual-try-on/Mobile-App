import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Logout from "../Screens/Logout";
import BottomTabNavigator from "./BottomTabNavigator";
import AboutUs from "../Screens/AboutUs";
import BuyCredit from "../Screens/BuyCredit";
import Feedback from "../Screens/Feedback";

import AddToCart from "../Screens/AddToCart";
import Payment from "../Screens/Payment";
import CallRate from "../Screens/CallRate";
import Cart from "../Screens/Cart";
import TryOn from "../Screens/TryOn";
import CustomSidebarMenu from "./CustomDrawer";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="shopping-cart" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={Feedback}
        options={{
          title: "About",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="info" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "Payment",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="info" size={24} />
          ),
        }}
      />

      <Drawer.Screen
        name="Catelogue"
        component={BuyCredit}
        options={{
          title: "Catelogue",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="category" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="tryon"
        component={TryOn}
        options={{
          title: "Tryon",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="category" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="AddToCart"
        component={AddToCart}
        options={{
          title: "AddToCart",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="category" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: "Logout",
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="logout" size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerHome;
