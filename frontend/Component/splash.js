/**
 * This components used to display small loading page
 */
import {useNavigation} from '@react-navigation/native';
import {React, useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        // handleUserToken();
        Navigation.replace('Login');
        setIsGo(false);
      }, 3000);
    }
  }, []);



  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0, backgroundColor: 'white' }}>
      <Image
        source={require('./assets/images/sp.png')}
        style={{width: '60%', height: '30%', marginTop: -80, padding: 0}}
      />
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', marginTop: 60}}> MOH Office Malabe</Text>
    </View>
  );
}