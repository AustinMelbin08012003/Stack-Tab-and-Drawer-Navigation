import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Recovery from "./Components/Recovery";
import Landing from "./Components/Landing";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Filter from "./Components/Filter";
import Dashboard from "./Components/Dashboard";
import CoffeeDetails from "./Components/CoffeeDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "./Components/Categories";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Dashboard" component={DashboardStack} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="CoffeeDetails" component={CoffeeDetails} />
        <Stack.Screen name="Categories" component={CategoriesStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DashboardStack() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Filter" component={Filter} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

function CategoriesStack() {
  return (
    <Drawer.Navigator initialRouteName="Categories">
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Filter" component={Filter} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

function CategoriesScreen() {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
