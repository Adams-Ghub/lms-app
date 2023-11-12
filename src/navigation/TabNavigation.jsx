import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseNavigation from "./CourseNavigation";
import Dashboard from "../screens/Dashboard";

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Courses"
        component={CourseNavigation}
        
      />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
