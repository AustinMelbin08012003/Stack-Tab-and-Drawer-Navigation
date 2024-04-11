import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image,} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoffeeDetails = () => {
  const navigation = useNavigation(); // Hook to access navigation object

  const [favorites, setFavorites] = useState([
    { id: 1, imageUrl: require("../assets/a.png") },
    { id: 2, imageUrl: require("../assets/b.png") },
    { id: 3, imageUrl: require("../assets/c.png") },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((photo) => photo.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Favorites</Text>
      {favorites.map((photo) => (
        <TouchableOpacity
          key={photo.id}
          onPress={() => removeFavorite(photo.id)}
        >
          <Image source={photo.imageUrl} style={styles.photo} />
        </TouchableOpacity>
      ))}
      {favorites.length === 0 && (
        <Text style={styles.emptyMessage}>No favorites yet.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#080c16"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  photo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
    color: "white"
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2c305f",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CoffeeDetails;
