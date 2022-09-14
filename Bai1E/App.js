import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtRegister}>REGISTER</Text>
      </View>
      <View>
        <TextInput placeholder="Name" style={styles.inputName}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Phone" style={styles.inputPhone}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Email" style={styles.inputEmail}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Password" style={styles.inputPassword}></TextInput>
      </View>
      <View>
        <TextInput placeholder="Birthday" style={styles.inputBirthday}></TextInput>
      </View>
      <View  style={styles.btn}>
        <Button title="REGISTER" color="#E53935"></Button>
      </View>
      <View style={styles.txt}>
        <Text>When you to term and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5219",
  },

  txtRegister: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 80,
    alignSelf: 'center',
  },

  inputName: {
    marginTop: 20,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    width: '95%',
  },

  inputPhone: {
    marginTop: 20,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    width: '95%',
  },

  inputEmail: {
    marginTop: 20,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    width: '95%',
  },

  inputPassword: {
    marginTop: 20,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    width: '95%',
  },

  inputBirthday: {
    marginTop: 20,
    backgroundColor: "rgba(196,196,196,03)",
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    width: '95%',
  },

  btn: {
    marginTop: 20,
    alignSelf: 'center',
    width: '95%',
  },

  txt: {
    marginTop: 20,
    alignSelf: 'center',
  }
});
