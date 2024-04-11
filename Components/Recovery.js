import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import logo from "../assets/LODI_CODE.png";

function Recovery(props) {
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#2c305f",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.rest}>Reset Password</Text>
      <TextInput
        style={styles.passl}
        label="Email address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.reset}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEND RESET CODE
      </Button>
      <Text
        style={styles.back}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "white",
    fontSize: 12,
  },
  reset: {
    width: "52%",
    marginTop: 20,
    backgroundColor: "black",
  },
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    width: "20%",
  },
  passl: {
    marginTop: 40,
    width: "52%",
  },
  forgot: {
    color: "white",
    fontSize: 10,
    textAlign: "right",
  },
  rest: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
});

export default Recovery;