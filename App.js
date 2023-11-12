import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CourseList from "./src/screens/CourseList";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation";
import { Provider } from "react-redux";
import {store} from "./src/redux/store.js"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
