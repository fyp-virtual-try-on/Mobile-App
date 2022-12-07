import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioButtonRN from "radio-buttons-react-native";

// import { RadioButton } from "react-native-paper";

// import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function Payment() {
  //   const [value, setValue] = React.useState("first");
  const data = [
    {
      label: "Cash On Delivery",
    },
    {
      label: "Jazz Cash",
    },
    {
      label: "Easy Paisa",
    },
  ];
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
      <SafeAreaView style={styles.container}>
        <View style={styles.main} elevation={20}>
          <View style={styles.top}>
            {/* <Icon name="lock" style={styles.lock} /> */}
            <Text style={styles.signUp}>Checkout and Payment</Text>
          </View>
          <View style={[styles.triangle, styles.arrowDown]} />

          <View style={styles.form}>
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
            <TextInput
              style={styles.input}
              value={Text}
              placeholder="Address"
            />
            <TextInput style={styles.input} value={Text} placeholder="City" />
            <TextInput style={styles.input} value={Text} placeholder="State" />

            <View>
              <Text>Select Payment Option</Text>
            </View>
            <View>
              <RadioButtonRN data={data} selectedBtn={(e) => console.log(e)} />
            </View>

            <TextInput
              style={styles.input}
              value={Text}
              placeholder="Card No. XXXX-XXXX-XXXX-XXXX"
            />
            <TextInput style={styles.input} value={Text} placeholder="CVV" />
          </View>

          <View style={styles.btnSignUp}>
            <Button title="Checkout" color="#fca61f"></Button>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
  form: {
    padding: 10,
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
    justifyContent: "center",
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
    marginVertical: 10,
    padding: 10,
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
    // margin: 12,
    marginVertical: 10,
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
