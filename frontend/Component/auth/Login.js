/**
 * This is the Login compoenets of the application
 * User can login using thier login credentilas
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
// import Background from '../../components/auth/Background';
// import Logo from '../../components/auth/Logo';
import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'

import {StyleSheet, Text, View, TouchableOpacity,Image, ScrollView} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from './UserApi';

export default function Login({navigation}) {
  const Navigation = useNavigation();

  const [name, setuserName] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  // This function call when the user click login button
  const onLoginPressed = () => {
    // Create constant object to pass value to backend
    // const data = {
    //   userName: name.value,
    // //   password: password.value,
    // };

    //Call POST method to validate user crenditals form backend and get reponse
    
    userLogin({
      userName: name.value,
      password: password.value
    }).then((result)=>{
      if(result.data.status){

        if(result.data.success === 'Admin Login successfully'){
          alert('Admin Login successfully');
          setTimeout(() => {
            Navigation.navigate('Nav');
          }, 2000);
        }else{
          alert('Login Success');
          setTimeout(() => {
            Navigation.navigate('Nav');
          }, 2000);
        }
      }else{
        alert('Login Fail');
      }
    }).catch(error=>{
      console.log(error);
    })

    // axios
    //   .post('http://192.168.56.1:5000/user/login', data)
    //   .then(function (response) {
    //     if (response.data.success) {
    //       alert('Login Success');
    //       setTimeout(() => {
    //         Navigation.navigate('Home');
    //       }, 2000);
    //     }
    //   })
    //   .catch(function (error) {
    //     alert('Login Fail');
    //   });
  };

  return (
    // <Background>
    //   <Logo />
    <ScrollView style={styles. scrollView}>
    <View>

          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../assets/images/login.png')}
            />
          </View>


      <Text style={styles.header}>Sign In</Text>

      <TextInput
        label="User Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setuserName({value: text, error: ''})}
      />

      <TextInput
        label="Password"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        secureTextEntry
      />

      <SubmitButton mode="contained" color="#6495ed" onPress={onLoginPressed}>
        Login
      </SubmitButton>

      <View style={styles.row}>
        <Text style={styles.account}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    // </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 12,
    color: 'black',
    alignSelf: 'center'
  },
  image:{
     width: '85%',
     height: 250,
     alignSelf: 'center',
     marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  account:{
    color: 'black'
  },
  link: {
    fontWeight: 'bold',
    color: 'blue'
  },
  scrollView: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
});
