import React from 'react';
import { View, Text } from 'react-native';

const CourseListItem = ({ name, instructor, duration }) => {
  return (
    <View>
      <View>
        <Text>{name}</Text>
      </View>
      <Veiw>
        <Text>{instructor}</Text>
        <Text>{duration}</Text>
      </Veiw>
    </View>
  );
};



export default CourseListItem;
