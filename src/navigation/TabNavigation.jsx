import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseNavigation from "./CourseNavigation";
import Dashboard from "../screens/Dashboard";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Courses" component={CourseNavigation} options={{
        tabBarIcon:({focused})=>(
            <Fontisto name="nav-icon-list-a" size={19} color={focused ? "blue" : "black"}/>
        )
      }}/>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
