import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

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
      <View style={styles.back}>
        <TouchableOpacity onPress={() => Navigation.replace('ClinicAdd')}>
        <View style={styles.Navback}>
           <Image
              style={styles.write}
              source={require('../assets/images/write.png')}
            />
          <Text style={styles.link}>Schedule Clinic</Text>
        </View>
        </TouchableOpacity>
     

        <TouchableOpacity onPress={() => Navigation.replace('ClinicFetch')}>
        <View style={styles.Navback}>
           <Image
              style={styles.view}
              source={require('../assets/images/view.png')}
            />
          <Text style={styles.link}>Clinic Fetch</Text>
        </View>
        </TouchableOpacity>
      </View>
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
  },
  write:{
      width: '20%',
      height: '100%',
      marginLeft: 15,
  },
  view:{
    width: '30%',
    height: '120%',
    marginLeft: 10,
},
  back:{
      marginTop: -90,
  },
  Navback:{
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
  link:{
    color: 'black',
    marginLeft: 45,
    fontSize: 23,
    marginTop: 20,
    FontFamily: 'bold'
  }

})