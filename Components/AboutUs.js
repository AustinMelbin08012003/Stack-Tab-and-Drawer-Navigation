import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.member}>
          <View style={styles.memberImageContainer}>
            <Image
              source={require("../assets/1.png")}
              style={styles.memberImage}
            />
          </View>
          <Text style={styles.memberName}>Austin Melbin Villoso</Text>
          <Text style={styles.memberRole}>SERVICE CREW</Text>
        </View>
        <View style={styles.member}>
          <View style={styles.memberImageContainer}>
            <Image
              source={require("../assets/2.png")}
              style={styles.memberImage}
            />
          </View>
          <Text style={styles.memberName}>Dandreb Paul Benalayo</Text>
          <Text style={styles.memberRole}>BARISTA</Text>
        </View>
        <View style={styles.member}>
          <View style={styles.memberImageContainer}>
            <Image
              source={require("../assets/3.png")}
              style={styles.memberImage}
            />
          </View>
          <Text style={styles.memberName}>Andrion Rangillas</Text>
          <Text style={styles.memberRole}>MANAGER</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#080c16"
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  member: {
    flexDirection: "column", // Change flexDirection to column
    alignItems: "center",
    marginBottom: 20,
  },
  memberImageContainer: {
    marginBottom: 10, // Add some margin between image and text
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  memberRole: {
    fontSize: 14,
    color: "#666",
    color: "white",
    textAlign: "center",
  },
});

export default AboutUs;
