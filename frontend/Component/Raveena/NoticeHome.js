import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeButton from '../SubComponent/HomeButton';

export default function NoticeHome() {
  const Navigation = useNavigation();

  return (
    <View>
      
      <View style={styles.img}>
        <Image
          style={styles.image}
          source={require('../assets/images/midwife.png')}
        />
      </View>

      <HomeButton
        style={styles.button}
        onPress={() => {
          Navigation.navigate('NoticeAdd');
        }}
        title="ADD NOTICE"
        backgroundColor="#26a69a"
      />
      <HomeButton
        style={styles.button}
        onPress={() => {
          Navigation.navigate('NoticeFetch');
        }}
        title="VIEW NOTICES"
        marginTop="20px"
        backgroundColor="#26a69a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 0, // border borderRadius same as width and height
    width: '100%',
    height: 400,
    // marginLeft: -100, // reposition the circle inside parent view
    // position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 100,
  },
});
