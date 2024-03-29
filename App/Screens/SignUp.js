import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main} elevation={20}>
        <View style={styles.top}>
          <Icon name="lock" style={styles.lock} />
          <Text style={styles.signUp}>SIGNUP</Text>
        </View>
        <View style={[styles.triangle, styles.arrowDown]} />

        <View>
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            value={Text}
            placeholder="Last Name"
          />
          <TextInput style={styles.input} value={Text} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.btnSignUp}>
          <Button title="Signup" color="#fca61f"></Button>
        </View>
        <Text style={styles.t1}>
          Already have an account? <Text style={styles.themetext}>SignIn</Text>{" "}
          {"\n"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: 5,
    alignSelf: "center",
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
    flex: 0.7,
    backgroundColor: "#fca61f",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  main: {
    flex: 0,
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
  container: {
    flex: 1,
    backgroundColor: "#e7e8e8",
    alignItems: "center",
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
});
