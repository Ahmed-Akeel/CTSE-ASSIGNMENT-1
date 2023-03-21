import { StyleSheet, Text, View, ToastAndroid  } from 'react-native'
import {React, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
import {BASE_URL}  from '../Baseurl'

export default function PhiAdd() {

  const Navigation = useNavigation();

  const [firstName, setfirstName] = useState({value: '', error: ''});
  const [lastName, setlastName] = useState({value: '', error: ''});
  const [age, setage] = useState({value: '', error: ''});
  const [gender, setgender] = useState({value: '', error: ''});
  const [nicNumber, setnicNumber] = useState({value: '', error: ''});
  const [address, setaddress] = useState({value: '', error: ''});

  // This function call when the user click submit button
  const onPostPressed = () => {
    // Create constant object to pass value to backend
  if(firstName.value === '' ){

    ToastAndroid.show('First Name Field Empty !', ToastAndroid.SHORT);

  }else if(lastName.value === ''){

    ToastAndroid.show('Last Name Field Empty ! ', ToastAndroid.SHORT);

  }else if(age.value === ''){

    ToastAndroid.show('Age Field Empty !', ToastAndroid.SHORT);

  }
  else if(gender.value === ''){

    ToastAndroid.show('Gender Field Empty !', ToastAndroid.SHORT);

  }
  else if(nicNumber.value === ''){

    ToastAndroid.show('NIC Number Field Empty !', ToastAndroid.SHORT);

  }
  else if(address.value === ''){

    ToastAndroid.show('Address Field Empty !', ToastAndroid.SHORT);

  }else{
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      gender:gender.value,
      nicNumber:nicNumber.value,
      address:address.value,
    };
    console.log(data);

    axios
      .post(BASE_URL+ 'Phisave', data)
      .then(function (response) {
        if (response.data.success) {
          ToastAndroid.show('Patient Saved Successfully !', ToastAndroid.SHORT);
          setTimeout(() => {
            Navigation.navigate('PhiFetch');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert(error);
      });
    }
  };

  return (
    <View>
       <Text style={styles.header}>Add Patient</Text>
      <View style={[styles.card, styles.shadowProp]}>
       
        <TextInput
          label="Enter First Name"
          returnKeyType="next"
          value={firstName.value}
          onChangeText={text => setfirstName({value: text, error: ''})}
        />

        <TextInput
          label="Enter Last Name"
          returnKeyType="next"
          value={lastName.value}
          onChangeText={text => setlastName({value: text, error: ''})}
        />

        <TextInput
          label="Enter Age"
          
          value={age.value}
          onChangeText={text => setage({value: text, error: ''})}
        />
          <TextInput
          label="Enter Gender"
        
          value={gender.value}
          onChangeText={text => setgender({value: text, error: ''})}
        />
          <TextInput
          label="Enter NIC Number"
          
          value={nicNumber.value}
          onChangeText={text => setnicNumber({value: text, error: ''})}
        />
          <TextInput
          label="Enter Address"
          multiline={true}
          numberOfLines={3}
          value={address.value}
          onChangeText={text => setaddress({value: text, error: ''})}
        />

        <SubmitButton mode="contained" color="#6495ed" 
        onPress={onPostPressed}>
          Send
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontFamily: '',
        fontWeight: 'bold',
        paddingVertical: 8,
        marginTop: 20,
        bottom: 5,
        color: 'black',
        alignSelf: 'center',
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
        borderRadius: 15,
        paddingVertical: 0,
        paddingHorizontal: 25,
        width: '100%',
        height: '95%',
        marginVertical: 0,
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
        width: 200,
        overflow: 'hidden', // for hide the not important parts from circle
        margin: 10,
        height: 200,
      },
      background: {
        // this shape is a circle
        // border borderRadius same as width and height
        borderRadius: 400,
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
})