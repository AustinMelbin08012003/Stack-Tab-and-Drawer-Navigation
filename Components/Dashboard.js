import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Homepage'); 
  };

  const items = [
    { name: 'Item 1', image: require('../assets/Item1.png'), price: '$10', description: 'Vanilla Iced Coffee' },
    { name: 'Item 2', image: require('../assets/Item2.png'), price: '$15', description: 'Caramel Iced Coffee' },
    { name: 'Item 3', image: require('../assets/Item3.png'), price: '$20', description: 'Mocha Iced Coffee' },
    { name: 'Item 4', image: require('../assets/Item4.png'), price: '$25', description: 'Hazelnut Iced Coffee' },
    { name: 'Item 5', image: require('../assets/Item5.png'), price: '$25', description: 'Pumpkin Spice Iced Coffee' },
    { name: 'Item 6', image: require('../assets/Item6.png'), price: '$25', description: 'Autumn Pumpkin Spice Coffee' },
    { name: 'Item 7', image: require('../assets/Item7.png'), price: '$25', description: 'Homemade Blended Coffee' },
    { name: 'Item 8', image: require('../assets/Item8.png'), price: '$25', description: 'Messy Keto Frappe' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/LODI_CODE.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to Our Coffee Shop!</Text>
      </View>
      <View style={styles.menuContainer}>
        {items.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => navigation.navigate(item.name)}
          >
            <Image source={item.image} style={styles.menuItemImage} />
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black', 
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
    textAlign: 'center', 
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    width: '48%', 
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  menuItemText: {
    color: '#335A02',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    color: '#335A02',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItemDescription: {
    color: '#335A02',
    fontSize: 14,
    textAlign: 'center',
  },
  logoutButton: {
    width: "52%",
    backgroundColor: '#2c305f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;
