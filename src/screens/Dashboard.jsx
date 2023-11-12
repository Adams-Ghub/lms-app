import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardItem from "../components/DashboardItem";
import nodeImg from "../nodejs.jpg";

const Dashboard = () => {
  const [enrolled, setEnrolled] = useState();

  const data = [
    {
      id: 1, // Unique identifier for the course
      name: "Introduction to React Native",
      instructor: "John Doe", // Name of the course instructor
      description:
        "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: nodeImg, //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React Native",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2, // Unique identifier for the course
      name: "Introduction to Firebase",
      instructor: "Stephen Sark", // Name of the course instructor
      description:
        "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: nodeImg, //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Firebase",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3, // Unique identifier for the course
      name: "Introduction to Electron js",
      instructor: "Joseph Kumi", // Name of the course instructor
      description:
        "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: nodeImg, //Link to the course thumbnail
      duration: "6 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Electron js",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 107,
          name: "Joseph Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4, // Unique identifier for the course
      name: "Introduction to Node js",
      instructor: "Gilbert Freeman", // Name of the course instructor
      description:
        "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: nodeImg, //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Node js",
          content:
            "Overview of React Native, setting up your development environment.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content:
            "Creating a simple mobile app using React Native components.",
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 107,
          name: "Joseph Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
    },
  ];

  const filtered = data.filter((item) => {
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
        {filtered.map((item) => {
          return (
            <DashboardItem
              image={"../nodejs.jpg"}
              name={item.name}
              instructor={item.instructor}
              dueDate={"17-09-2023"}
            />
          );
        })}
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
