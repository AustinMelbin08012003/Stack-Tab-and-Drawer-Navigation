import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>Camp Phillips Manolo Fortich Bukidnon</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>09639212470</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>Admin@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#080c16"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white"
  },
  info: {
    fontSize: 16,
    color: "white"
  },
});

export default Contact;