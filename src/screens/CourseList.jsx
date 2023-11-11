import React from 'react';
import { View, TouchableOpacity,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseListItem  from '../components/CourseListItem';

const CourseList = () => {
  const courseModel = [
    {
      id: 1, // Unique identifier for the course
      name: 'Introduction to React Native',
      instructor: 'John Doe', // Name of the course instructor
      description:
        'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: 'your.image.here', //Link to the course thumbnail
      duration: '8 weeks', // Duration of the course
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content:
            'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content:
            'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2, // Unique identifier for the course
      name: 'Introduction to Firebase',
      instructor: 'Stephen Sark', // Name of the course instructor
      description:
        'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: 'your.image.here', //Link to the course thumbnail
      duration: '8 weeks', // Duration of the course
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Firebase',
          content:
            'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content:
            'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3, // Unique identifier for the course
      name: 'Introduction to Electron js',
      instructor: 'Joseph Kumi', // Name of the course instructor
      description:
        'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: 'your.image.here', //Link to the course thumbnail
      duration: '6 weeks', // Duration of the course
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Electron js',
          content:
            'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content:
            'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4, // Unique identifier for the course
      name: 'Introduction to Node js',
      instructor: 'Gilbert Freeman', // Name of the course instructor
      description:
        'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: 'your.image.here', //Link to the course thumbnail
      duration: '8 weeks', // Duration of the course
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Node js',
          content:
            'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content:
            'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container} >
      <View >
        {courseModel.map((course) => {
          return (
            <TouchableOpacity>
              <CourseListItem
                name={course.name}
                instructor={course.instructor}
                duration={course.duration}
                location={course.location}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,       
        width:'100%',
        padding:15
    }
})

export default CourseList;
