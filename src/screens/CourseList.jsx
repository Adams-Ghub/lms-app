import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseListItem from "../components/CourseListItem";
import { useDispatch, useSelector } from "react-redux";
import { GetCourses } from "../redux/course/courseAction";

const CourseList = ({ navigation }) => {
  const { courses, message } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCourses());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {message === "pending" ? (
          <Text>Loading...</Text>
        ) : message === "success" ? (
          courses.map((course, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Coursedetails", { data: course });
                }}
                key={index}
              >
                <CourseListItem
                  name={course.name}
                  instructor={course.instructor}
                  duration={course.duration}
                  location={course.location}
                />
              </TouchableOpacity>
            );
          })
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
  },
});

export default CourseList;
