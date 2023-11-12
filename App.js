import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CourseList from './src/screens/CourseList';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}