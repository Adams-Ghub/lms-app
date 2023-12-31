import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import ExpandableCard from "expandablecard";
import { useDispatch, useSelector } from "react-redux";
import { clearEnrolled, enrollUser } from "../redux/course/courseSlice";

const CourseDetails = () => {
  const info = useRoute().params.data;
  const { user } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleEnrollUser = (courseId) => {
    data = { id: courseId, student: user };

    dispatch(enrollUser(data));
    Alert.alert("Message", "You have been successfully enrolled", [
          {
            text: "OK",
            onPress: () => {
              dispatch(clearEnrolled());
            },
          },
        ])
      
  };

  console.log("user:", user);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}
      >
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Course name</Text>
          <Text style={styles.value}>{info.name}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Instructor's name</Text>
          <Text style={styles.value}>{info.instructor}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.value}>{info.description}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Enrollment status</Text>
          <View style={styles.enrollBtnValueContainer}>
            <Text style={styles.value}>{info.enrollmentStatus}</Text>
            {info.enrollmentStatus === "open" ? (
              <TouchableOpacity
                style={styles.enrollButton}
                onPress={() => handleEnrollUser(info.id)}
              >
                <Text style={styles.enrollButtonText}>Enroll</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View>
          <View style={styles.fieldContainer}>
            <Text style={styles.title}>Course duration</Text>
            <Text style={styles.value}>{info.duration}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.value}>{info.location}</Text>
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Schedule</Text>
          <Text style={styles.value}>{info.schedule}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Pre-requisites</Text>
          <View>
            {info.prerequisites.map((item) => {
              return <Text style={styles.value}>{item}</Text>;
            })}
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.title}>Syllabus</Text>
          <ExpandableCard
            title="View syllabus"
            expanded={false}
            headerStyle={{ backgroundColor: "#ccc", paddingHorizontal: 10 }}
          >
            <View style={styles.syllabusContainer}>
              {info.syllabus.map((item) => {
                return (
                  <View style={styles.syllabusItemContainer}>
                    <Text>{"Week " + item.week}</Text>
                    <Text>{"Topic: " + item.topic}</Text>
                    <Text>{"Content: " + item.content}</Text>
                  </View>
                );
              })}
            </View>
          </ExpandableCard>
        </View>
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
  fieldContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  value: {
    fontSize: 17,
    color: "#777",
    paddingLeft: 5,
  },
  syllabusContainer: {
    height: "100%",
  },
  syllabusItemContainer: {
    marginBottom: 10,
  },
  enrollBtnValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  enrollButton: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
  },
  enrollButtonText: {
    color: "#fff",
  },
});

export default CourseDetails;
