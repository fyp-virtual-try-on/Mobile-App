import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://us.123rf.com/450wm/blankstock/blankstock1803/blankstock180300207/97193818-phone-sign-icon-support-symbol-call-center-speech-bubble-with-smile-blurred-gradient-design-element-.jpg?ver=6";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fca61f",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
            marginTop: 70,
            color: "white",
          }}
        >
          MetaWare
        </Text>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "900",
            color: "white",
            marginBottom: 30,
          }}
        >
          User Name: XYZ
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
          style={{backgroundColor:'#232'}}
        /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginTop: 40,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
