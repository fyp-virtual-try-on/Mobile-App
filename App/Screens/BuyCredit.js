import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

const BuyCredit = ({ navigation }) => {
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
            source={require("../../assets/img_1.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Text style={styles.itemName}>Product 1</Text>
            <Text>Brand Name: Outfitters</Text>
            <Text>Price : 30$</Text>
            <View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate("tryon");
                }}
              >
                <Text style={styles.buttonText}>Try On</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Text style={styles.itemName}>Product 2</Text>
            <Text>Brand Name: J.</Text>
            <Text>Price : 30$</Text>
            <View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate("DrawerHome");
                }}
              >
                <Text style={styles.buttonText}>Try On</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/img_2.png")}
          />
          <View
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Text style={styles.itemName}>Product 3</Text>
            <Text>Brand Name: J.</Text>
            <Text>Price : 30$</Text>
            <View>
              <Pressable style={styles.button} onPress={null}>
                <Text style={styles.buttonText}>Try On</Text>
              </Pressable>
            </View>
          </View>
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
    padding: 5,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // width: "100%",

    marginTop: "40%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },
});

export default BuyCredit;
