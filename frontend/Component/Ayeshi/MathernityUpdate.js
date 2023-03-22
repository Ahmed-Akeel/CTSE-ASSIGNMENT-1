
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
import {BASE_URL}  from '../Baseurl'
import {StyleSheet, Image, View, Text,ScrollView, ToastAndroid} from 'react-native';

export default function UpdateMathernity({route}) {
  const Navigation = useNavigation();

  const mathernityID = route.params.mathernityId;
  const [firstName, setfirstName] = useState(route.params.firstName);
  const [lastName, setlastName] = useState(route.params.lastName);
  const [division, setdivision] = useState(route.params.division);
  const [regNo, setregNo] = useState(route.params.regNo);
  const [dob, setdob] = useState(route.params.dob);
  const [address, setaddress] = useState(route.params.address);
  const [occupation, setoccupation] = useState(route.params.occupation);
  const [healthStatus, sethealthStatus] = useState(route.params.healthStatus);
  const [dateLast, setdateLast] = useState(route.params.dateLast);
  const [dateReturn, setdateReturn] = useState(route.params.dateReturn);

  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(mathernityID);
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
      //Call POST method to validate user crenditals form backend and get reponse
      axios
        .put(BASE_URL + `mathernity/update/${mathernityID}`, data)
        .then(function (res) {
          if (res.data.success) {
            ToastAndroid.show('Mothers Data Update Successfully !', ToastAndroid.SHORT);
            setTimeout(() => {
              Navigation.navigate('MathernityFetch');
            }, 2000);
          }
        })
        .catch(function (error) {
          alert('Fail' + error);
        });
    }
  };

  return (
    <ScrollView>
    <View>
      <View style={[styles.card, styles.shadowProp]}>
   
        <Text style={styles.header}>Update Mother Details</Text>

        <TextInput
          label="firstName"
          returnKeyType="next"
          value={firstName}
          onChangeText={text => setfirstName(text)}
        />

        <TextInput
          label="lastName"
          returnKeyType="next"
          value={lastName}
          onChangeText={text => setlastName(text)}
        />

        <TextInput
          label="Enter division"
          returnKeyType="next"
          value={division}
          onChangeText={text => setdivision(text)}
        />
        <TextInput
          label="Enter regNo"
          returnKeyType="next"
          value={regNo}
          onChangeText={text => setregNo(text)}
        />
        <TextInput
          label="Enter dob"
          returnKeyType="next"
          value={dob}
          onChangeText={text => setdob(text)}
        />
        <TextInput
          label="Enter address"
          returnKeyType="next"
          value={address}
          onChangeText={text => setaddress(text)}
        />
        <TextInput
          label="Enter occupation"
          returnKeyType="next"
          value={occupation}
          onChangeText={text => setoccupation(text)}
        />
        <TextInput
          label="Enter healthStatus"
          returnKeyType="next"
          value={healthStatus}
          onChangeText={text => sethealthStatus(text)}
        />
        <TextInput
          label="Enter dateLast"
          returnKeyType="next"
          value={dateLast}
          onChangeText={text => setdateLast(text)}
        />
        <TextInput
          label="Enter dateReturn"
          returnKeyType="next"
          value={dateReturn}
          onChangeText={text => setdateReturn(text)}
        />
        <SubmitButton mode="contained" color="#43CFAC" onPress={onPressUpdate}>
          Update
        </SubmitButton>
      </View>
      </View>
      </ScrollView>
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
    color: 'black',
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
