import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to Learning Management System</Text>
        <Text>Kindly fill out the following for the best user experience</Text>

        <View>
          <TextInput placeholder="Full name" />
          <TextInput placeholder="Email" />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
