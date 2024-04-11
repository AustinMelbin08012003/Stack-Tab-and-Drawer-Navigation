import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Landing.png")}
        style={[styles.image, { height: height * 0.2 }]}
      />
      <Text style={styles.title}>Welcome to Our Original Iced Coffee Shop</Text>
      <Text style={styles.description}>
        Where we serve up the best brews in town. Located in Manolo Fortich, we offer a cozy spot to enjoy fresh, flavorful coffee. From carefully sourced beans to friendly service, we're your go-to for a delicious caffeine fix.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Categories")}
      >
        <Text style={styles.buttonText}>Explore Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#080c16"
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "white"
  },
  button: {
    backgroundColor: "#2c305f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Landing;
