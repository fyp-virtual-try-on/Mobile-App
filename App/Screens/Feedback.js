import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";

const FeedBack = ({ navigation }) => {
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
        <View style={{ marginTop: 30 }}>
          <Text style={styles.yourfit}>About Us</Text>
        </View>
        <View>
          <Text style={styles.creditAmount}>
            Bring Real World Shopping Experience Online
          </Text>
        </View>

        <View>
          <Pressable style={styles.button} onPress={null}>
            <Text style={styles.buttonText}>Sign UP</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.yourfit}>Contact Us</Text>
        </View>
        {/* <View>
          <Text style={styles.creditAmount}>For Details</Text>
        </View> */}

        <SafeAreaView style={styles.containerForm}>
          <View style={styles.main} elevation={20}>
            <View style={styles.top}>
              {/* <Icon name="lock" style={styles.lock} /> */}
              <Text style={styles.signUp}>For Details</Text>
            </View>
            <View style={[styles.triangle, styles.arrowDown]} />

            <View>
              <TextInput
                style={styles.input}
                // value={username}
                placeholder="Name"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                // secureTextEntry={true}
              />
              <TextInput
                style={styles.message}
                placeholder="Message"
                // secureTextEntry={true}
              />
            </View>

            <View style={styles.btnSignUp}>
              <Button
                onPress={() => {
                  navigation.navigate("DrawerHome");
                }}
                title="Send"
                color="#fca61f"
              ></Button>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                opacity: 0.3,
                marginTop: 12,
                marginRight: 8,
                marginLeft: 8,
              }}
            />
            {/* 
        <View style={styles.socialButtonsContainer}>
          <View style={styles.Socialfb}>
            <Button color="blue" title="Facebook " />
          </View>
          <View style={styles.SocialGoogle}>
            <Button color="red" title="Google " />
          </View>
        </View> */}
            {/* <Text
              style={{
                color: "orange",
                fontSize: 15,
                alignSelf: "center",
                marginTop: 15,
              }}
              onPress={() => {
                navigation.navigate("DrawerHome");
              }}
            >
              Login as Guest
            </Text> */}
            {/* 
            <Text
              style={{
                fontSize: 15,
                alignSelf: "center",
                marginTop: 5,
              }}
            >
              Dont have account?
              <Text
                style={{
                  color: "orange",
                  fontSize: 15,
                  alignSelf: "center",
                  marginTop: 5,
                }}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                Signup
              </Text>
            </Text> */}
          </View>
        </SafeAreaView>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  triangle: {
    alignSelf: "center",
    width: 5,
    height: 5,
    backgroundColor: "transparent",
    borderStyle: "solid",
  },
  arrowDown: {
    borderTopWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 0,
    borderLeftWidth: 15,
    borderTopColor: "#fca61f",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  btnSignUp: {
    width: 290,
    alignSelf: "center",
  },
  t1: {
    marginRight: 10,
    alignSelf: "flex-end",
  },
  signUp: {
    color: "white",
    fontSize: 25,
    marginBottom: 15,
  },
  lock: {
    color: "white",
    fontSize: 25,
  },
  top: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 0.8,
    height: 100,
    backgroundColor: "#fca61f",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  main: {
    flex: 0.6,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  themeBg: {
    backgroundColor: "orange",
  },
  themetext: {
    color: "orange",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#e7e8e8",
    alignItems: "center",
    padding: 10,
    margin: 10,
    justifyContent: "center",
  },
  Logo: {
    width: "60%",
    height: "30%",
    resizeMode: "stretch",
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#fca61f",
    padding: 10,
    width: 300,
  },
  message: {
    height: 70,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#fca61f",
    padding: 10,
    width: 300,
  },
  // signUp yaha tk ha
  unlockBanner: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  unlockIco: {
    fontSize: 70,
    color: "white",
  },
  pwdForm: {
    flex: 2.75,
    alignItems: "center",
  },
  containerPWD: {
    flex: 1,
    backgroundColor: "#fff",
  },
  BtnSend: {
    width: 290,
    alignSelf: "center",
    marginTop: 30,
  },

  Socialfb: {
    marginRight: 4,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  SocialGoogle: {
    marginLeft: 4,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  facebook: {
    color: "blue",
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#e7e8e8",
    // justifyContent: "center",
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

export default FeedBack;
