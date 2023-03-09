import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { userRegister } from './UserApi';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
// import FormBackground from '../../components/form/FormBackground';
import TextInput from '../SubComponent/InputField'
import SubmitButton from '../SubComponent/Button'
// import Background from '../../components/userComplaint/Background';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Register() {

    const Navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');
    // const [userID, setUserID] = useState('4488');

    const onPressRegister = () => {
      if(password === repassword){
        userRegister({
            userName: userName,
            userEmail: Email,
            userContact: Phone,
            password: password
          }).then((result)=>{
            if(result.data.status){
      
              alert('Registration Success');
                setTimeout(() => {
                  Navigation.navigate('Login');
                }, 2000);
            }else{
              alert('Registration Fail');
            }
          }).catch(error=>{
            console.log(error);
          })
        }else{
          alert('Password not match')
        }
    }

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View
          style={{
            // backgroundColor: '#6495ed',
            padding: 8,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
            User Register
          </Text>
        </View>

        {/* <FormBackground> */}
          {/* <Icon name="user" size={100} color="#6495ed"></Icon> */}
          <Text />
          <TextInput
            label="Enter User Name"
            returnKeyType="next"
            value={userName}
            onChangeText={text => setUserName(text)}
            textContentType="text"
          />

          <TextInput
            label="Enter Email"
            returnKeyType="next"
            value={Email}
            onChangeText={text => setEmail(text)}
            textContentType="text"
          />

          <TextInput
            label="Enter Contact Number"
            returnKeyType="next"
            value={Phone}
            onChangeText={text => setPhone(text)}
            textContentType="text"
          />

           <TextInput
            label="Enter Password"
            returnKeyType="next"
            value={password}
            onChangeText={text => setPassword(text)}
            textContentType="password"
            secureTextEntry
          />

          <TextInput
            label="ReEnter Password"
            returnKeyType="next"
            value={repassword}
            onChangeText={text => setrePassword(text)}
            textContentType="repassword"
            secureTextEntry
          />

          <SubmitButton mode="contained" color="#6495ed" onPress={onPressRegister} style={{marginTop:60}}> 
            Register
          </SubmitButton>

          <Text />
        {/* </FormBackground> */}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      padding: 10,
    },
  });
