import React from 'react';

const CourseDetails = ({ info }) => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Course name</Text>
          <Text>{info.name}</Text>
        </View>
        <View>
          <Text>Instructor's name</Text>
          <Text>{info.instructor}</Text>
        </View>
        <View>
          <Text>Description</Text>
          <Text>{info.description}</Text>
        </View>
        <View>
          <Text>Enrollment status</Text>
          <View>
            <Text>{info.enrollmentStatus}</Text>{' '}
            <TouchableOpacity>
              {' '}
              <Text>Enroll</Text>{' '}
            </TouchableOpacity>{' '}
          </View>
        </View>
        <View>
          <View>
            <Text>Course duration</Text>
            <Text>{info.duration}</Text>
          </View>
          <View>
            <Text>Location</Text>
            <Text>{info.location}</Text>
          </View>
        </View>
        <View>
          <Text>Schedule</Text>
          <Text>{info.schedule}</Text>
        </View>
        <View>
          <Text>Pre-requisites</Text>
          <View>
            {info.prerequisites.map((item) => {
              return <Text>{item}</Text>;
            })}
          </View>
        </View>
        <View>
          <Text>Syllabus</Text>
          <Text>{info.syllabus}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetails;
