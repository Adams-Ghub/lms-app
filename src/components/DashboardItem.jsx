import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import  ProgressBar  from "progressbar-react-native";

const DashboardItem = ({ image, name, instructor, dueDate }) => {
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.instructorDurationContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.instructor}>{instructor}</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
        <View>
          <ProgressBar stepCount={1} currStep={1} colorScheme="dark" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#708090",
    marginBottom: 7,
  },
  instructorDurationContainer: {
    padding: 4,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
  },
  instructor: {
    fontSize: 18,
  },
});

export default DashboardItem;
