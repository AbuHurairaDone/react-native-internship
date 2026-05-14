import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [focused, setFocused] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.desc}>Create an account so you can explore all the existing jobs</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email"
          style={[styles.input, focused == "email" && styles.focusedInput]}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused("")}
        />
        <TextInput 
          placeholder="Password"
          style={[styles.input, focused == "password" && styles.focusedInput]}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocused("password")}
          onBlur={() => setFocused("")}

        />
        <TextInput 
          placeholder="Confirm Password"
          style={[styles.input, focused == "confirmPassword" && styles.focusedInput]}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onFocus={() => setFocused("confirmPassword")}
          onBlur={() => setFocused("")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonInput}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EFF6FF'
  },

  header:{
    marginTop:100,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'#2563EB',
    fontSize:28,
    fontWeight:'700',
  },
  desc:{
    marginTop:10,
    paddingHorizontal:15,
    color:'#032b5c',
    textAlign: 'center',
    fontSize:14,
    fontWeight:'500'
  },
  inputContainer:{
    marginTop:30,
  },
  input:{
    marginTop:10,
    marginHorizontal:20,
    paddingVertical:15,
    paddingHorizontal:10,
    fontWeight:'500',
    color:'#94A3B8',
    fontSize:16,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    borderWidth: 1,
    borderColor:'#BFDBFE'
  },
  focusedInput:{
    borderWidth:2,
    borderColor:'#2563EB'
  },
  buttonContainer:{
    marginVertical:20
  },
  button: {
    margin:20,
    padding:15,
    borderRadius:10,
    backgroundColor:'#2563EB',
    alignItems:'center'
  },
  buttonInput:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
    color:'white'
  }

})
