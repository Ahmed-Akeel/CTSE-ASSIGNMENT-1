import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function ClinicHome() {

  const Navigation = useNavigation();

  return (
    <View>
          <View style={styles.img}>
           <Image
              style={styles.image}
              source={require('../assets/images/chome.jpg')}
            />
          </View>

     <Button styles={styles.btn}
       onPress={() => {
        Navigation.navigate('ClinicAdd');
      }}
        title="Schedule Clinic"
        color="#841584"
        marginTop="20px"
      />
      <Button styles={styles.btn}
       onPress={() => {
        Navigation.navigate('ClinicFetch');
      }}
        title="View Clinic"
        color="#841584"
        marginTop="20px"
      />
    </View>
  )
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
  image:{
     width: '90%',
     height: 250,
     alignSelf: 'center',
     borderRadius: 20,
     marginTop: 100,
  }
})