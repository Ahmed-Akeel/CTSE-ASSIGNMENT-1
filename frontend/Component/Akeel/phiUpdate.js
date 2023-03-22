
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
import {BASE_URL}  from '../Baseurl'
import {StyleSheet, Image, View, Text,ToastAndroid} from 'react-native';

export default function UpdatePhi({route}) {
  const Navigation = useNavigation();

  const phiId = route.params.phiId;
  const [firstName, setfirstName] = useState(route.params.firstName);
  const [lastName, setlastName] = useState(route.params.lastName);
  const [age, setage] = useState(route.params.age);
  const [gender, setgender] = useState(route.params.gender);
  const [nicNumber, setnicNumber] = useState(route.params.nicNumber);
  const [address, setaddress] = useState(route.params.address);



  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(phiId);
    // Create constant object to pass value to backend
    if (firstName.value === ' ') {
      ToastAndroid.show('First Name Field Empty !', ToastAndroid.SHORT);
    } else if (lastName.value == ' ') {
      ToastAndroid.show('Last Name Field Empty !', ToastAndroid.SHORT);
    } 
    else if (age.value == ' ') {
      ToastAndroid.show('Age Field Empty !', ToastAndroid.SHORT);
    } 
    else if (gender.value == ' ') {
      ToastAndroid.show('Gender Field Empty !', ToastAndroid.SHORT);
    } 
    else if (nicNumber.value == ' ') {
      ToastAndroid.show('NIC Number Field Empty !', ToastAndroid.SHORT);
    } 
    else if (address.value == ' ') {
      ToastAndroid.show('Address Field Empty !', ToastAndroid.SHORT);
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender:gender,
        nicNumber:nicNumber,
        address:address
      };
      //Call POST method to validate user crenditals form backend and get reponse
      axios
        .put(BASE_URL + `Phi/update/${phiId}`, data)
        .then(function (res) {
          if (res.data.success) {
            ToastAndroid.show('Patient Updated Successfully !', ToastAndroid.SHORT);
            setTimeout(() => {
              Navigation.navigate('phi');
            }, 2000);
          }
        })
        .catch(function (error) {
          alert('Fail' + error);
        });
    }
  };

  return (
    // <Background>
    <View>
      <View style={[styles.card, styles.shadowProp]}>
        {/* <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../assets/images/back.png')}
            />
          </View>
        </View> */}
      


        <Text style={styles.header}>Update Patient Details</Text>

        <TextInput
          label="Update First Name"
          returnKeyType="next"
          value={firstName}
          onChangeText={text => setfirstName(text)}
        />

        <TextInput
          label="Update Last Name"
          returnKeyType="next"
          value={lastName}
          onChangeText={text => setlastName(text)}
        /> 

        <TextInput
          label="Update Age"
          multiline={true}
          numberOfLines={4}
          value={age}
          onChangeText={text => setage(text)}
        />
        <TextInput
          label="Update Gender"
          multiline={true}
          numberOfLines={4}
          value={gender}
          onChangeText={text => setgender(text)}
        />
        <TextInput
          label="Update NIC Number"
          multiline={true}
          numberOfLines={4}
          value={nicNumber}
          onChangeText={text => setnicNumber(text)}
        />
        <TextInput
          label="Update Address"
          multiline={true}
          numberOfLines={4}
          value={address}
          onChangeText={text => setaddress(text)}
        />
        <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
          Update
        </SubmitButton>
      </View>
      </View>
    // {/* </Background> */}
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: 20,
    marginBottom: 20,
    bottom: 5,
    color: 'black',
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: 'b;ack',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
    marginVertical: 3,
    borderWidth: 1,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    alignSelf: 'center',
    margin: 2,
    flex: 1,
    width: 350,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 200,
  },
  background: {
    // this shape is a circle
    borderRadius: 0, // border borderRadius same as width and height
    width: 535,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 380,
    position: 'absolute', // position it in circle
    bottom: 5, // position it in circle
    marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
  },
});