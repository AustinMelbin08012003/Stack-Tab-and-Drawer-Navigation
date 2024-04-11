import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";

import logo from "../assets/LODI_CODE.png";

function Homepage(props) {
  
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#2c305f",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.team}>Welcome Users!</Text>
      <Text style={styles.par}></Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        Login
      </Button>
      <Button
        style={styles.Registration}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Registration")}
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
  login: {
    marginTop: 20,
    width: "52%",
    backgroundColor: "black",
  },
  Registration: {
    width: "52%",
    marginTop: 20,
    backgroundColor: "black",
  },
  team: {
    color: "white",
    fontSize: 30,
    fontWeight: "950",
  },
  par: {
    color: "black",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 10,
    fontStyle: "italic",
  },
});

export default Homepage;