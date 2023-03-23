import {StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeButton from './SubComponent/HomeButton';

export default function Nav() {
  const Navigation = useNavigation();

  return (
   
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./assets/images/77.jpg')}>
      <View styles={styles.container}>
        <Text style={styles.header}>MOH Dashboard</Text>
        <View styles={styles.btn}>
          <HomeButton
            onPress={() => {
              Navigation.navigate('Clinic');
            }}
            title="ADMIN"
            color="#1769aa"
            backgroundColor="#26a69a"
          />
        </View>

        <HomeButton
          styles={styles.btn}
          onPress={() => {
            Navigation.navigate('NoticeHome');
          }}
          title="MIDWIFE"
          color="#1769aa"
          marginTop="20px"
          backgroundColor="#26a69a"
        />

        <HomeButton
          styles={styles.btn}
          onPress={() => {
            Navigation.navigate('Mathernity');
          }}
          title="MATERNITY"
          color="#1769aa"
          marginTop="20px"
          backgroundColor="#26a69a"
        />
        <HomeButton
          styles={styles.btn}
          onPress={() => {
            Navigation.navigate('phi');
          }}
          title="PHI"
          color="#1769aa"
          marginTop="20px"
          backgroundColor="#26a69a"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  header: {
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: 80,
    marginBottom: 70,
    bottom: 5,
    color: 'black',
    alignSelf: 'center',
  },
  backgroundImage: {flex: 1,width:"100%",height:960},
  btn: {
    marginTop: 100,
    marginLeft: 5,
    marginBottom: 50,
  },
});
