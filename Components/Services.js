import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Services = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Specialty Coffees:</Text>
        <Text style={styles.serviceDescription}>
        Explore our wide selection of specialty coffees, meticulously sourced and expertly brewed to perfection.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Delicious Treats:</Text>
        <Text style={styles.serviceDescription}>
        Indulge in freshly baked pastries and snacks, perfectly paired with your favorite coffee beverage.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Community Events:</Text>
        <Text style={styles.serviceDescription}>
        Join us for regular events and activities, from coffee tastings to live music nights, fostering connections and good vibes.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Friendly Service:</Text>
        <Text style={styles.serviceDescription}>
        Our team is here to ensure you have a wonderful experience, with attentive and friendly service every time you walk through our doors.
        </Text>
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
  service: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white"
  },
  serviceDescription: {
    fontSize: 16,
    color: "white"
  },
});

export default Services;