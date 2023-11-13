import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/course/courseSlice";

const Welcome = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleContinueButton = (data) => {
    if (!name || !email) {
      Alert.alert("Message", "Fields cannot be empty");
    } else {
      dispatch(setUser(data));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeMessage}>
          Welcome to Learning Management System
        </Text>
        <Text style={styles.actionText}>
          Kindly fill out the following input fields
        </Text>

        <View>
          <TextInput
            placeholder="Full name"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            const data = { name, email };
            handleContinueButton(data);
            navigation.navigate("Home");
          }}
          style={styles.countinueButton}
        >
          <Text style={styles.continueBtnText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    paddingHorizontal: 50,
  },
  welcomeMessage: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  actionText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  countinueButton: {
    backgroundColor: "#151e3d",
    paddingVertical: 10,
    borderRadius: 5,
    marginvertical: 10,
  },
  continueBtnText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
  textInput:{
    fontSize:16,
   borderWidth:1,
   marginVertical:10,
   borderRadius:5,
   paddingLeft:8

  }
});

export default Welcome;
