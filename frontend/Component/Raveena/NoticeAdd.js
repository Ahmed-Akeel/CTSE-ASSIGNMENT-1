import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import {React, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import TextInput from '../SubComponent/InputField';
import SubmitButton from '../SubComponent/Button';
import {BASE_URL} from '../Baseurl';

export default function NoticeAdd() {
  const Navigation = useNavigation();

  const [title, settitle] = useState({value: '', error: ''});
  const [date, setdate] = useState({value: '', error: ''});
  const [desc, setdesc] = useState({value: '', error: ''});

  // This function call when the user click submit button
  const onPostPressed = () => {
    // Create constant object to pass value to backend
    if (title.value === '') {
      ToastAndroid.show('Title Field Empty !', ToastAndroid.SHORT);
    } else if (date.value === '') {
      ToastAndroid.show('Date Field Empty ! ', ToastAndroid.SHORT);
    } else if (desc.value === '') {
      ToastAndroid.show('Description Field Empty !', ToastAndroid.SHORT);
    } else {
      const data = {
        title: title.value,
        date: date.value,
        description: desc.value,
      };
      console.log(data);

      axios
        .post(BASE_URL + 'addnotice', data)
        .then(function (response) {
          if (response.data.success) {
            ToastAndroid.show('Notise Save Successfully !', ToastAndroid.SHORT);
            setTimeout(() => {
              Navigation.navigate('NoticeFetch');
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
      <Text style={styles.header}>Add Notice</Text>
      <View style={[styles.card, styles.shadowProp]}>
        {/* <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/msg3.png')}
            />
          </View>
        </View> */}

        <TextInput
          label="Enter Notice Title"
          returnKeyType="next"
          value={title.value}
          onChangeText={text => settitle({value: text, error: ''})}
        />

        <TextInput
          label="Enter date"
          returnKeyType="next"
          value={date.value}
          onChangeText={text => setdate({value: text, error: ''})}
        />

        <TextInput
          label="Enter description"
          returnKeyType="next"
          value={desc.value}
          onChangeText={text => setdesc({value: text, error: ''})}
        />

        <SubmitButton mode="contained" color="#6495ed" onPress={onPostPressed}>
          Send
        </SubmitButton>
      </View>
    </View>
  );
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
});
