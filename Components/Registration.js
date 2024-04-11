import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import logo from "../assets/LODI_CODE.png";

function Registration(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#2c305f",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.create}>Create an Account</Text>
      <TextInput
        style={styles.usernames}
        label="Username"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.emaill}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.passl}
        label="Password"
        placeholder="Password"
        secureTextEntry = {!showPassword}
        right = {
          <TextInput.Icon
          icon={showPassword ? "eye": "eye-off"}
          onPress={()=>{
            Keyboard.dismiss;
            setShowPassword(!showPassword);
          }}
          />
        }
        value={text}
        onChangeText={(text) => setText(text)}
        
      />
      <Button
        style={styles.Registration}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        Registration
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
  },
  Registration: {
    marginTop: 20,
    width: "52%",
    backgroundColor: "black",
  },
  passl: {
    marginTop: 20,
    marginBottom: 15,
    width: "52%",
  },
  usernames: {
    marginBottom: 15,
    width: "52%",
  },
  create: {
    color: "white",
    fontSize: 30,
    fontWeight: "950",
    marginBottom: 20,
  },
  emaill: {
    width: "52%",
  }
});

export default Registration;