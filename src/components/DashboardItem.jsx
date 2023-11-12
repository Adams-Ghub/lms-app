import React,{useState,useEffect}from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import  {ProgressView}  from "react-native-progress";

const DashboardItem=({image,name,instructor,dueDate})=> {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={{uri:image}} style={styles.image}/>
      </View>
    
      <View style={styles.instructorDurationContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.instructor}>{instructor}</Text>
        <Text style={styles.dueDate}>{dueDate}</Text>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'#708090',
        marginBottom:7
    },
    instructorDurationContainer:{
        padding:4
    },
    image:{
        width:80,
        height:80
    },
    name:{
        fontSize:22,
        fontWeight:'500'
    },
    instructor:{
        fontSize:18
    }
})

export default DashboardItem;
