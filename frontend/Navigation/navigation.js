import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Test from '../Component/Pamitha/Test'
import Nav from '../Component/Nav';
import ClinicHome from '../Component/Pamitha/ClinicHome';
import ClinicAdd from '../Component/Pamitha/ClinicAdd';
import ClinicFetch from '../Component/Pamitha/ClinicFetch';
import UpdateClinic from '../Component/Pamitha/ClinicUpdate';
import Register from '../Component/auth/Register';
import Login from '../Component/auth/Login';
import Splash from '../Component/splash';
import MathernityHome from '../Component/Ayeshi/MathernityHome';
import MathernityAdd from '../Component/Ayeshi/MathernityAdd';
import MathernityFetch from '../Component/Ayeshi/MathernityFetch';
import UpdateMathernity from '../Component/Ayeshi/MathernityUpdate';

import PhiHome from '../Component/Akeel/phiHome';
import PhiAdd from '../Component/Akeel/phiAdd';
import PhiFetch from '../Component/Akeel/phiFetch';
import UpdatePhi from '../Component/Akeel/phiUpdate';

import NoticeAdd from '../Component/Raveena/NoticeAdd';
import NoticeFetch from '../Component/Raveena/NoticeFetch';
import NoticeHome from '../Component/Raveena/NoticeHome';
import UpdateNotice from '../Component/Raveena/NoticeUpdate';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">

    <Stack.Screen
    options={{headerShown: false}}
    name="Splash"
    component={Splash}
  />

  <Stack.Screen
    options={{headerShown: false}}
    name="Login"
    component={Login}
  />

<Stack.Screen
    options={{headerShown: false}}
    name="Register"
    component={Register}
  />

  <Stack.Screen
    options={{headerShown: false}}
    name="Nav"
    component={Nav}
  />

  <Stack.Screen
    options={{headerShown: false}}
    name="Clinic"
    component={ClinicHome}
  />

 <Stack.Screen
    options={{headerShown: false}}
    name="ClinicAdd"
    component={ClinicAdd}
  /> 

  <Stack.Screen
    options={{headerShown: false}}
    name="ClinicFetch"
    component={ClinicFetch}
  /> 

 <Stack.Screen
    options={{headerShown: false}}
    name="UpdateClinic"
    component={UpdateClinic}
  />
  <Stack.Screen
    options={{headerShown: false}}
    name="Mathernity"
    component={MathernityHome}
  />
  <Stack.Screen
    options={{headerShown: false}}
    name="MathernityAdd"
    component={MathernityAdd}
  /> 
  <Stack.Screen
    options={{headerShown: false}}
    name="MathernityFetch"
    component={MathernityFetch}
  /> 
<Stack.Screen
    options={{headerShown: false}}
    name="UpdateMathernity"
    component={UpdateMathernity}
  />  

<Stack.Screen
    options={{headerShown: false}}
    name="phi"
    component={PhiHome}
  />

 <Stack.Screen
    options={{headerShown: false}}
    name="PhiAdd"
    component={PhiAdd}
  /> 

  <Stack.Screen
    options={{headerShown: false}}
    name="PhiFetch"
    component={PhiFetch}
  /> 

 <Stack.Screen
    options={{headerShown: false}}
    name="UpdatePhi"
    component={UpdatePhi}
  />  

<Stack.Screen
    options={{headerShown: false}}
    name="NoticeHome"
    component={NoticeHome}
  />  

<Stack.Screen
    options={{headerShown: false}}
    name="NoticeAdd"
    component={NoticeAdd}
  />  

<Stack.Screen
    options={{headerShown: false}}
    name="NoticeFetch"
    component={NoticeFetch}
  />  
  <Stack.Screen
    options={{headerShown: false}}
    name="NoticeUpdate"
    component={UpdateNotice}
  />  

  </Stack.Navigator>
</NavigationContainer>

  )
}

const styles = StyleSheet.create({})