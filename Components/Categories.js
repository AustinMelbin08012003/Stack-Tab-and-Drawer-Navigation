import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";

const categories = [
  { id: 1, name: "Vanilla Iced Coffee", image: require("../assets/Item1.png") },
  { id: 2, name: "Caramel Iced Coffee", image: require("../assets/Item2.png") },
  { id: 3, name: "Mocha Iced Coffee", image: require("../assets/Item3.png") },
  { id: 4, name: "Hazelnut Iced Coffee", image: require("../assets/Item4.png") },
  { id: 5, name: "Pumpkin Spice Iced Coffee", image: require("../assets/Item5.png") },
  { id: 6, name: "Autumn Pumpkin Spice Coffee", image: require("../assets/Item6.png") },
  { id: 7, name: "Homemade Blended Coffee", image: require("../assets/Item7.png") },
  { id: 8, name: "Messy Keto Frappe", image: require("../assets/Item8.png") },
];

const Categories = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("Categories", { category: item.name })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.backButton}>
        <Text style={styles.backButtonText}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CoffeeDetails')} style={styles.DetailsButton}>
        <Text style={styles.DetailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#080c16"
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
  DetailsButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2c305f",
  },
  DetailsButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Categories;
