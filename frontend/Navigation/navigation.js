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

 

  </Stack.Navigator>
</NavigationContainer>

  )
}

const styles = StyleSheet.create({})