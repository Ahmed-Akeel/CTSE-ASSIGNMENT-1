import { StyleSheet, Text, View, ToastAndroid ,ScrollView} from 'react-native'
import {React, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
import {BASE_URL}  from '../Baseurl'

export default function MathernityAdd() {

  const Navigation = useNavigation();

  const [firstName, setfirstName] = useState({value: '', error: ''});
  const [lastName, setlastName] = useState({value: '', error: ''});
  const [division, setdivision] = useState({value: '', error: ''});
  const [regNo, setregNo] = useState({value: '', error: ''});
  const [dob, setdob] = useState({value: '', error: ''});
  const [address, setaddress] = useState({value: '', error: ''});
  const [occupation, setoccupation] = useState({value: '', error: ''});
  const [healthStatus, sethealthStatus] = useState({value: '', error: ''});
  const [dateLast, setdateLast] = useState({value: '', error: ''});
  const [dateReturn, setdateReturn] = useState({value: '', error: ''});


  // This function call when the user click submit button
  const onPostPressed = () => {
    // Create constant object to pass value to backend
  if(firstName.value === '' ){

    ToastAndroid.show('First Name Field Empty !', ToastAndroid.SHORT);

  }else if(lastName.value === ''){

    ToastAndroid.show('Last Name Field Empty ! ', ToastAndroid.SHORT);

  }else if(division.value === ''){

    ToastAndroid.show('Division Field Empty !', ToastAndroid.SHORT);
  }else if(regNo.value === ''){

    ToastAndroid.show('Registration No. Field Empty !', ToastAndroid.SHORT);
  }else if(dob.value === ''){

    ToastAndroid.show('Date of Birth Field Empty !', ToastAndroid.SHORT);
  }else if(address.value === ''){

    ToastAndroid.show('Address Field Empty !', ToastAndroid.SHORT);
  }else if(occupation.value === ''){

    ToastAndroid.show('Occupation Field Empty !', ToastAndroid.SHORT);
  }else if(healthStatus.value === ''){

    ToastAndroid.show('Health Status Field Empty !', ToastAndroid.SHORT);
  }else if(dateLast.value === ''){

    ToastAndroid.show('Last day of visited Field Empty !', ToastAndroid.SHORT);
  }else if(dateReturn.value === ''){

    ToastAndroid.show('Next day to visit Field Empty !', ToastAndroid.SHORT);


  }else{
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        division: division.value,
        regNo: regNo.value,
        dob: dob.value,
        address: address.value,
        occupation: occupation.value,
        healthStatus: healthStatus.value,
        dateLast: dateLast.value,
        dateReturn: dateReturn.value,
    };
    console.log(data);

    axios
      .post(BASE_URL+ 'mathernitysave', data)
      .then(function (response) {
        if (response.data.success) {
          ToastAndroid.show('Mother details Saved Successfully !', ToastAndroid.SHORT);
          setTimeout(() => {
            Navigation.navigate('MathernityFetch');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert(error);
      });
    }
  };

  return (
    
      <ScrollView>
    <View>
       <Text style={styles.header}>Register Mother</Text>
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
          label="Enter Division"
          returnKeyType="next"
          value={division.value}
          onChangeText={text => setdivision({value: text, error: ''})}
        />
        <TextInput
          label="Enter Registration No."
          returnKeyType="next"
          value={regNo.value}
          onChangeText={text => setregNo({value: text, error: ''})}
        />
        <TextInput
          label="Enter Date of Birth"
          returnKeyType="next"
          value={dob.value}
          onChangeText={text => setdob({value: text, error: ''})}
        />
        <TextInput
          label="Enter Address"
          returnKeyType="next"
          value={address.value}
          onChangeText={text => setaddress({value: text, error: ''})}
        />
        <TextInput
          label="Enter Occupation"
          returnKeyType="next"
          value={occupation.value}
          onChangeText={text => setoccupation({value: text, error: ''})}
        />
        <TextInput
          label="Enter Health Status"
          returnKeyType="next"
          value={healthStatus.value}
          onChangeText={text => sethealthStatus({value: text, error: ''})}
        />
        <TextInput
          label="Enter Last Day of Visited"
          returnKeyType="next"
          value={dateLast.value}
          onChangeText={text => setdateLast({value: text, error: ''})}
        />
        <TextInput
          label="Enter Next Day to visit"
          returnKeyType="next"
          value={dateReturn.value}
          onChangeText={text => setdateReturn({value: text, error: ''})}
        />
        

        <SubmitButton mode="contained" color="#43CFAC" 
        onPress={onPostPressed}>
          Send
        </SubmitButton>
      </View>
     
    </View>
    </ScrollView>
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