import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import React from "react";

const AddToCart = ({ navigation }) => {
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
          <Text style={styles.text}>Result Image</Text>
        </View>
        <View style={styles.item}>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("tryon");
              }}
            >
              <Text style={styles.buttonText}>Download</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("tryon");
              }}
            >
              <Text style={styles.buttonText}>Share</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("tryon");
              }}
            >
              <Text style={styles.buttonText}>Favourite</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ width: "90%" }}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("tryon");
            }}
          >
            <Text style={styles.buttonText}>Add To Cart</Text>
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
    padding: 20,
    justifyContent: "space-evenly",
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
export default AddToCart;
