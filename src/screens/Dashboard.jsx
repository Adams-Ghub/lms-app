import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardItem from "../components/DashboardItem";
import nodeImg from "../nodejs.jpg";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { courses,user } = useSelector((state) => state.courses);

  const filtered = courses.filter((item) => {
    for (let i = 0; i < item.students.length; i++) {
      if (item.students[i].email === user.email) {
        return item;
      }
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {filtered.length === 0 ? (
          <Text>No course enrolled</Text>
        ) : (
          filtered.map((item) => {
            return (
              <DashboardItem
                image={item.thumbnail}
                name={item.name}
                instructor={item.instructor}
                dueDate={item.dueDate}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 8,
  },
});

export default Dashboard;
