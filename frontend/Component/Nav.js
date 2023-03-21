import {StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Nav() {
  const Navigation = useNavigation();

  return (
    <View styles={styles.container}>
      {/* <View styles={styles.btn}>
      <Button 
          onPress={() => {
            Navigation.navigate('Clinic');
          }}
        title="Pamitha"
        color="#841584"
      />
      </View>
      <Button styles={styles.btn}
       onPress={() => {
        Navigation.navigate('User');
      }}
        title="Raveena"
        color="#841584"
        marginTop="20px"
      />
      <Button styles={styles.btn}
       onPress={() => {
        Navigation.navigate('User');
      }}
        title="Ayeshi"
        color="#841584"
        marginTop="20px"
      />
      <Button styles={styles.btn}
       onPress={() => {
        Navigation.navigate('User');
      }}
        title="Akeel"
        color="#841584"
        marginTop="20px"
      /> */}
      <View style={styles.back}>
        <TouchableOpacity onPress={() => Navigation.replace('Clinic')}>
          <View style={styles.Navback}>
            <Image
              style={styles.write}
              source={require('./assets/images/write.png')}
            />
            <Text style={styles.link}>Clinic page</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.replace('ClinicFetch')}>
          <View style={styles.Navback}>
            <Image
              style={styles.view}
              source={require('./assets/images/view.png')}
            />
            <Text style={styles.link}>Raveena</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.replace('ClinicAdd')}>
          <View style={styles.Navback}>
            <Image
              style={styles.write}
              source={require('./assets/images/write.png')}
            />
            <Text style={styles.link}>Akeel</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.replace('ClinicFetch')}>
          <View style={styles.Navback}>
            <Image
              style={styles.view}
              source={require('./assets/images/view.png')}
            />
            <Text style={styles.link}>Ayeshi</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  btn: {
    marginTop: 15,
    marginLeft: 5,
    marginBottom: 50,
  },
  back: {
    marginTop: 90,
  },
  Navback: {
    // alignSelf: 'center'
    flexDirection: 'row',
    height: 120,
    // backgroundColor: 'blue',
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
    borderRadius: 12,
    borderColor: 'pink',
    borderWidth: 2,
    marginBottom: 20,
  },
  link: {
    color: 'black',
    marginLeft: 45,
    fontSize: 23,
    marginTop: 20,
    FontFamily: 'bold',
  },
  image:{
    width: '90%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 100,
 },
 write:{
     width: '20%',
     height: '100%',
     marginLeft: 15,
 },
 view:{
  width: '30%',
  height: '120%',
  marginLeft: 10,
}
});
