import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

const Cart = ({ navigation }) => {
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
      <View
        style={{
          display: "flex",
          backgroundColor: "#e7e8e8",

          alignItems: "center",
          height: "100%",
        }}
      >
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Text style={styles.itemName}>Product 1</Text>
            <Text>Brand Name: J.</Text>
            <Text>Qty : 1</Text>
            <Text>Price : 30$</Text>
          </View>
          <View>
            <Text style={styles.remove}>Remove</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Text style={styles.itemName}>Product 2</Text>
            <Text>Brand Name: J.</Text>
            <Text>Qty : 1</Text>
            <Text>Price : 30$</Text>
          </View>
          <View>
            <Text style={styles.remove}>Remove</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Text style={styles.itemName}>Product 3</Text>
            <Text>Brand Name: J.</Text>
            <Text>Qty : 1</Text>
            <Text>Price : 30$</Text>
          </View>
          <View>
            <Text style={styles.remove}>Remove</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Text style={styles.itemName}>Product 4</Text>
            <Text>Brand Name: J.</Text>
            <Text>Qty : 1</Text>
            <Text>Price : 30$</Text>
          </View>
          <View>
            <Text style={styles.remove}>Remove</Text>
          </View>
        </View>

        <View style={styles.total}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPriceText}>300$</Text>
        </View>
        <View style={{ width: "95%" }}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("DrawerHome");
            }}
          >
            <Text style={styles.buttonText}>Checkout</Text>
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
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    width: "95%",
    display: "flex",
    padding: 10,
    flexDirection: "row",
    margin: 10,
  },
  total: {
    backgroundColor: "white",
    width: "95%",
    justifyContent: "space-between",
    display: "flex",
    padding: 10,
    flexDirection: "row",
    margin: 10,
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    // marginTop: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  remove: {
    marginRight: 10,
    color: "red",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#fca61f",
    padding: 5,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // width: "100%",

    // marginTop: "40%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },
});

export default Cart;
