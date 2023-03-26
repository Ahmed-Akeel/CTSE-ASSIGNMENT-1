import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function MathernityHome() {

  const Navigation = useNavigation();

  return (
    <View>
          <View style={styles.img}>
           <Image
              style={styles.image}
              source={require('../assets/images/mother1.png')}
            />
          </View>

          <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Navigation.replace('MathernityAdd')}
        >
          
          <Text style={styles.navButtonText}>Add Mother</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Navigation.replace('MathernityFetch')}
        >
          <Text style={styles.navButtonText}>View All Mothers Details</Text>
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
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#482e70',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: 20,
  },
 
  navButtonText: {
    fontSize: 20,
    color: '#fbfafc',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})