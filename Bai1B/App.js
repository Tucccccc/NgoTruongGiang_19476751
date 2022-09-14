import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {Entypo} from "@expo/vector-icons"
import { deg } from "react-native-linear-gradient-degree";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <LinearGradient colors={["rgb(230, 255, 255)", "#BDF6C6"]}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    {...deg(180)}>

      <View style={styles.icon}>
        <Entypo name="lock" size={100}></Entypo>
      </View>

      <View style={styles.textForgot}>
        <Text>FORGET PASSWORD</Text>
      </View>

      <View style={styles.email}>
        <MaterialCommunityIcons name='email-newsletter' size={25}></MaterialCommunityIcons>
        <TextInput placeholder='email' style={styles.txtInput}></TextInput>
      </View>

      <View style={styles.button}>
        <Button title='NEXT'></Button>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 100,
  },

  textForgot: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 100,
  },

  email: {
    marginBottom: 100,
  },

  txtInput: {
    color: 'gray',
    borderColor: "#000000",
  }
});