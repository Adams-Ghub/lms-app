import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseListItem = ({ name, instructor, duration,location }) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.courseNameText}>{name}</Text>
      </View>
      <View style={styles.instructorDurationContainer}>
        <Text>{instructor}</Text>
        <Text>{duration}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0,
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 5,
    padding: 6,
    borderRadius:7
  },
  instructorDurationContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  courseNameText:{
    fontSize:20,
    fontWeight:'500'
  }
});

export default CourseListItem;
