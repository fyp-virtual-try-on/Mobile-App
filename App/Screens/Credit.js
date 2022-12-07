import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";

const Credit = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.yourfit}>YourFit</Text>
      </View>
      <View>
        <Text style={styles.creditAmount}>
          Shopping is Finally Easier with Personalized Try-On
        </Text>
      </View>

      <View>
        <Pressable style={styles.button} onPress={null}>
          <Text style={styles.buttonText}>Getting Started</Text>
        </Pressable>
      </View>
      {/* <View style={styles.windowBadge}>
        <View style={styles.numbersBadge}>
          <Text style={styles.numbersss}>000</Text>
        </View>
        <View style={styles.textWindow}>
          <Text style={styles.creditAmount}>Tap to get credit</Text>
          <Text style={{ color: "white" }}>
            There are 193 attempts available to you
          </Text>
        </View>
      </View> */}

      {/* <View style={styles.last}>
        <View style={styles.movieBadge} elevation={20}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/movie.jpg")}
          />
          <Text style={styles.adText}>Watch Ad video to get credit</Text>
        </View>
        <View style={styles.inviteBadge} elevation={20}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/friends.png")}
          />
          <Text style={styles.adText}>Invite your friend to get credit</Text>
        </View>
      </View>
      <View style={styles.last}>
        <View style={styles.movieBadge} elevation={20}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/movie.jpg")}
          />
          <Text style={styles.adText}>Watch </Text>
        </View>
        <View style={styles.inviteBadge} elevation={20}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/friends.png")}
          />
          <Text style={styles.adText}>Invite your friend to get credit</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e8e8",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    paddingTop: 10,
    marginTop: 10,
  },

  last: {
    flexDirection: "row",
    // marginTop: "2%",
    flexWrap: "wrap",
    flex: 0.6,
  },
  movieBadge: {
    backgroundColor: "white",
    paddingBottom: 20,
    borderRadius: 12,
    marginBottom: "5%",
    flex: 0.45,
    marginRight: "2%",
  },
  inviteBadge: {
    backgroundColor: "white",
    paddingBottom: 20,
    borderRadius: 12,
    marginBottom: "5%",
    flex: 0.45,
    marginLeft: "2%",
  },
  creditsBadge: {
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    width: "90%",
    borderRadius: 12,
    marginBottom: "5%",
  },
  numbersBadge: {
    backgroundColor: "gray",
    borderRadius: 12,
    flex: 0.4,
    height: "70%",
    alignSelf: "center",
    marginLeft: "5%",
    justifyContent: "center",
  },
  numbersss: {
    color: "orange",
    fontSize: 50,
    textAlign: "center",
  },
  textWindow: {
    flex: 0.6,
    paddingLeft: "5%",
    paddingRight: "5%",
    alignSelf: "center",
  },
  windowBadge: {
    backgroundColor: "#431d5a",
    height: "50%",
    width: "90%",
    borderRadius: 12,
    flexDirection: "row",
    flex: 0.2,
  },
  creditAmount: {
    color: "#fca61f",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    padding: 10,
  },
  adText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    padding: 10,
  },
  yourfit: {
    fontSize: 30,
  },
  button: {
    backgroundColor: "#fca61f",
    padding: 20,
    borderRadius: 30,

    width: "90%",
    marginTop: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Credit;
