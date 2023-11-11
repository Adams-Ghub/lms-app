import React from 'react';
import { View, Text } from 'react-native';

const CourseListItem = ({ name, instructor, duration }) => {
  return (
    <View>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{instructor}</Text>
        <Text>{duration}</Text>
      </View>
    </View>
  );
};



export default CourseListItem;
