import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseList from "../screens/CourseList";
import CourseDetails from "../screens/CourseDetails";

const Stack = createNativeStackNavigator();

const CourseNavigation=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courselist" component={CourseList} options={{ headerShown: false }}/>
      <Stack.Screen name="Coursedetails" component={CourseDetails} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default CourseNavigation;
