import {React, useState, useEffect} from 'react';
// import {useNavigation} from 'react-navigation/native';
import {useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import Background from '../../components/session/Background';
// import Icon from 'react-native-vector-icons/Feather';
import Button from '../SubComponent/Button'
import {BASE_URL} from '../Baseurl';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
//   Button,
  ScrollView,
  SectionList,
  Linking,
} from 'react-native';
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function ClinicFetch() {
  const Navigation = useNavigation();

  const [issues, setIssues] = useState([]);

  

  const retriveIssue = () => {
    axios
      .get(BASE_URL + 'getAll')
      .then(function (response) {
        if (response.data.success) {
          setIssues(response.data.exsitingContacts);
        }
      })
      .catch(function (error) {
        Alert('Error');
      });
  };

  const onDeletePost = id => {
    Alert.alert('Are You Sure?', 'Are you sure to delete this Schedule Clinic?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => deletePost(id)},
    ]);
  };

  const deletePost = id => {
    axios
      .delete(BASE_URL + `clinic/delete/${id}`)
      .then(function (res) {
        if (res.data.success) {
          ToastAndroid.show('Delete Successfully', ToastAndroid.SHORT);
          setTimeout(() => {
            retriveIssue();
          }, 1000);
        }
      })
      .catch(function (error) {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  const onEditPost = data => {
    const postData = {
      clinicId: data._id,
      title: data.title,
      date: data.date,
      description: data.description,
     
    };
    Navigation.navigate('UpdateClinic', postData);
  };

  useEffect(() => {
    retriveIssue();
  }, []);


  return (
    <ScrollView>
    <View>
      <View style={styles.container}>
        <Text style={styles.pagename}>All Clinic Schedule Details</Text>

        {issues.map((data, index) => {
          return (
            <View style={styles.itemBox}>
              <View style={styles.fixToText}>
             
                  <Text style={styles.mainTital}>Title : {data.title}</Text>

                  <Text style={styles.mainButtonBlockText}>Date : {data.date}</Text>

                  <Text style={styles.mainButtonBlockText}>Description : {data.description}</Text>

                   <View style={styles.but}>
                      <Button
                      style={styles.button}
                        mode="contained"
                        color="#dfdfdf"
                        onPress={() => onDeletePost(data._id)}
                        >
                        {/* <Icon
                          name="delete"
                          size={14}
                          fontWeight="bold"
                          color="white"> */}
                          &nbsp;Delete
                        {/* </Icon> */}
                      </Button>
                     
                      <Button
                         style={styles.button}
                        mode="contained"
                        color="#dfdfdf"
                        onPress={() => onEditPost(data)}
                        >
                        {/* <Icon
                          name="edit"
                          size={14}
                          fontWeight="bold"
                          color="white"> */}
                          &nbsp;Edit
                        {/* </Icon> */}
                      </Button>
                      </View>

              </View>
            </View>
          );
        })}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  but:{
    flexDirection:"row",
  },
  button:{
   width: "47%",
   fontSize: 9,
   marginLeft: 5,
  },
  pagename: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: 0,
    bottom: 5,
    color: 'black',
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
  },
  itemBox: {
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 330,
    height: 200,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
  },
  orderListSection: {
    alignItems: 'center',
    padding: 10,
  },
  ordername: {
    alignItems: 'center',
    marginTop: 8,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  orderDetails: {
    marginLeft: 10,
  },

  statusSection: {
    width: 125,
    height: 40,
    backgroundColor: '#5B78EE',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  statusButton: {
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
  },

  mainButtonBlock: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  mainButtonBlockText: {
    fontSize: 18,
    color: '#000000',
    // fontSize: 25,
  },
  mainTital:{
    fontSize: 18,
    color: '#000000',
    backgroundColor: 'pink',
    height: 40,
    width: 328,
    marginLeft: -20,
    paddingTop: 6,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
 

  // fixToText: {
  //   // flexDirection: 'row',
  //   // justifyContent: 'space-between',
  //   // marginLeft: 20,
  //   // marginRight: 20,
  //   // textAlign: 'left',
  // },
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: '#EBECF0',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusSection: {
    width: 125,
    height: 40,
    backgroundColor: '#5B78EE',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
