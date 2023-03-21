import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PhiHome() {

  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/patient.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Navigation.replace('PhiAdd')}
        >
          <Image
            style={styles.navButtonIcon}
            source={require('../assets/images/vomiting.png')}
            resizeMode="contain"
          />
          <Text style={styles.navButtonText}>Add Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Navigation.replace('PhiFetch')}
        >
          <Image
            style={styles.navButtonIcon}
            source={require('../assets/images/vomiting.png')}
            resizeMode="contain"
          />
          <Text style={styles.navButtonText}>View Patient Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '80%',
    height: '80%',
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
    backgroundColor: '#5a87af',
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
  navButtonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  navButtonText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});