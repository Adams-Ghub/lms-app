import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardItem from "../components/DashboardItem";
import nodeImg from "../nodejs.jpg";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { courses } = useSelector((state) => state.courses);

  const [enrolled, setEnrolled] = useState(courses);

  const filtered = enrolled.filter((item) => {
    for (let i = 0; i < item.students.length; i++) {
      if (item.students[i].id === 107) {
        return item;
      }
    }
  });

  console.log("filtered:", filtered);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {filtered.length === 0 ? (
          <Text>No course enrolled</Text>
        ) : (
          filtered.map((item) => {
            return (
              <DashboardItem
                image={"../nodejs.jpg"}
                name={item.name}
                instructor={item.instructor}
                dueDate={"17-09-2023"}
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
