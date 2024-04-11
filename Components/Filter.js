import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const isSelected = selectedFilters.includes(filter);
    if (isSelected) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Filter 1") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Filter 1")}
      >
        <Text style={styles.filterText}>CCS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Filter 2") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Filter 2")}
      >
        <Text style={styles.filterText}>BA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Filter 3") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Filter 3")}
      >
        <Text style={styles.filterText}>TEP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => console.log("Selected Filters:", selectedFilters)}
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#080c16"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  filterButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
  },
  selectedFilter: {
    backgroundColor: "lightblue",
  },
  filterText: {
    fontSize: 16,
    color: "white"
  },
  applyButton: {
    backgroundColor: "#2c305f",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Filter;
