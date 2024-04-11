import * as React from "react";
import { View, Image, StyleSheet, Text, Keyboard } from "react-native";
import { Button, TextInput } from "react-native-paper";

import logo from "../assets/LODI_CODE.png";

function Login(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
        const handleLogin = () => {
      if (email && password) {
        props.updateLoginStatus(true);
      } else {
        alert("Please enter valid email and password.");
      }
      
    };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c305f",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.greet}>Welcome Back!</Text>
      <TextInput
        style={styles.email}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.password}
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={() => {
              Keyboard.dismiss();
              setShowPassword(!showPassword);
            }}
          />
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")} 
      >
        Login
      </Button>
      <Text style={styles.register}>
        Don't have an account?{" "}
        <Text
          style={{ color: "white" }}
          onPress={() => props.navigation.navigate("Registration")}
        >
          Register
        </Text>
      </Text>
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
  password: {
    width: "52%",
    marginTop: 20,
  },
  forgot: {
    color: "white",
    fontSize: 14,
    textAlign: "right",
    marginTop: 10,
  },
  greet: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  email: {
    width: "52%",
    marginTop: 20,
  },
  register: {
    color: "white",
    marginTop: 20,
  },
});

export default Login;
