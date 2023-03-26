
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
import {BASE_URL}  from '../Baseurl'
import {StyleSheet, Image, View, Text} from 'react-native';

export default function UpdateClinic({route}) {
  const Navigation = useNavigation();

  const clinicID = route.params.clinicId;
  const [title, settitle] = useState(route.params.title);
  const [date, setdate] = useState(route.params.date);
  const [desc, setdesc] = useState(route.params.description);

  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(clinicID);
    // Create constant object to pass value to backend
    if (title.value === ' ') {
      ToastAndroid.show('Title Field Empty !', ToastAndroid.SHORT);
    } else if (date.value == ' ') {
      ToastAndroid.show('Date Field Empty !', ToastAndroid.SHORT);
    } else {
      const data = {
        title: title,
        date: date,
        description: desc,
      };
      //Call POST method to validate user crenditals form backend and get reponse
      axios
        .put(BASE_URL + `clinic/update/${clinicID}`, data)
        .then(function (res) {
          if (res.data.success) {
            ToastAndroid.show('Clinic Update Successfully !', ToastAndroid.SHORT);
            setTimeout(() => {
              Navigation.navigate('ClinicFetch');
            }, 2000);
          }
        })
        .catch(function (error) {
          alert('Fail' + error);
        });
    }
  };

  return (

    <View>
            <Image
              style={styles.image}
              source={require('../assets/images/update.png')}
            />
      

       <View style={styles.formbox}>
        <Text style={styles.header}>Update Clinic Details</Text>

        <TextInput
          label="Update Title"
          returnKeyType="next"
          value={title}
          onChangeText={text => settitle(text)}
        />

        <TextInput
          label="Update Date"
          returnKeyType="next"
          value={date}
          onChangeText={text => setdate(text)}
        /> 

        <TextInput
          label="Update description"
          multiline={true}
          numberOfLines={4}
          value={desc}
          onChangeText={text => setdesc(text)}
        />
        <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
          Update
        </SubmitButton>
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: 40,
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
    marginTop: 0,
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
    height: 100,
  },
  background: {
    // this shape is a circle
    borderRadius: 0, // border borderRadius same as width and height
    width: 535,
    height: 200,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 180, // same width and height for the container
    width: 200,
    bottom: 0, // position it in circle
    alignSelf: 'center',
    marginTop: 30, // center it in main view same value as marginLeft for circle but positive
  },
  formbox:{
    marginTop: -50,
    marginLeft: 20,
    marginRight: 20,
  }
});