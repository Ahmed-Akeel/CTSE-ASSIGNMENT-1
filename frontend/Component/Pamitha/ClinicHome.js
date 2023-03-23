import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeButton from '../SubComponent/HomeButton';

export default function ClinicHome() {
  const Navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/77.jpg')}>
      <View style={styles.img}>
        <Image
          style={styles.image}
          source={require('../assets/images/chome.jpg')}
        />
      </View>
      <View style={styles.back}>
        <HomeButton
          style={styles.button}
          onPress={() => {
            Navigation.navigate('ClinicAdd');
          }}
          title="Schedule Clinic"
          backgroundColor="#26a69a"
        />
        <HomeButton
          style={styles.button}
          onPress={() => {
            Navigation.navigate('ClinicFetch');
          }}
          title="VIEW Clinic"
          marginTop="20px"
          backgroundColor="#26a69a"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 0, // border borderRadius same as width and height
    width: '100%',
    height: 500,
    // marginLeft: -100, // reposition the circle inside parent view
    // position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 100,
  },
  write: {
    width: '20%',
    height: '100%',
    marginLeft: 15,
  },
  view: {
    width: '30%',
    height: '120%',
    marginLeft: 10,
  },
  back: {
    marginTop: -90,
  },
  Navback: {
    // alignSelf: 'center'
    flexDirection: 'row',
    height: 120,
    // backgroundColor: 'blue',
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
    borderRadius: 12,
    borderColor: 'pink',
    borderWidth: 2,
    marginBottom: 20,
  },
  link: {
    color: 'black',
    marginLeft: 45,
    fontSize: 23,
    marginTop: 20,
    FontFamily: 'bold',
  },
  backgroundImage: {flex: 1, width: '100%', height: 960},
});
