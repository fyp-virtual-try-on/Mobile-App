import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import React from "react";

const TryOn = ({ navigation }) => {
  return (
    <ScrollView
      vertical
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={styles.container}>
        <View style={styles.uploadImgContainer}>
          <Text style={styles.text}>Upload Image</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_1.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Text style={styles.itemName}>Product 1</Text>
            <Text>Brand Name: Outfitters</Text>
            <Text>Price : 30$</Text>
            {/* <View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("tryon");
              }}
            >
              <Text style={styles.buttonText}>Try On</Text>
            </Pressable>
          </View> */}
          </View>
        </View>

        <View style={{ width: "90%" }}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("AddToCart");
            }}
          >
            <Text style={styles.buttonText}>Try On</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e8e8",
    // justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  uploadImgContainer: {
    height: 400,
    // width:50,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    width: "90%",
    display: "flex",
    padding: 10,
    flexDirection: "row",
    margin: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  itemImage: {
    width: 130,
    height: 130,
  },
  button: {
    backgroundColor: "#fca61f",
    padding: 10,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",

    // width: "100%",

    // marginTop: "40%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },
});
export default TryOn;
