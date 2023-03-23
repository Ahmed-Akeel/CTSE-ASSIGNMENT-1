import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import TextInput from '../SubComponent/InputField';
import SubmitButton from '../SubComponent/Button';
import {BASE_URL} from '../Baseurl';
import {StyleSheet, Image, View, Text} from 'react-native';

export default function UpdateNotice({route}) {
  const Navigation = useNavigation();

  const noticeID = route.params.noticeId;
  const [title, settitle] = useState(route.params.title);
  const [date, setdate] = useState(route.params.date);
  const [desc, setdesc] = useState(route.params.description);

  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(noticeID);
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
        .put(BASE_URL + `notice/update/${noticeID}`, data)
        .then(function (res) {
          if (res.data.success) {
            ToastAndroid.show(
              'Notice Update Successfully !',
              ToastAndroid.SHORT,
            );
            setTimeout(() => {
              Navigation.navigate('NoticeFetch');
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

        <Text style={styles.header}>Update Notice Details</Text>

        <TextInput
          label="Post title"
          returnKeyType="next"
          value={title}
          onChangeText={text => settitle(text)}
        />

        <TextInput
          label="Date"
          returnKeyType="next"
          value={date}
          onChangeText={text => setdate(text)}
        />

        <TextInput
          label="Description"
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
