import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


import {useNavigation} from '@react-navigation/native';

export default function Nav() {

    const Navigation = useNavigation();

  return (
    <View styles={styles.container}>
        <View styles={styles.btn}>
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
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
      },

    btn:{
        marginTop: 15,
        marginLeft:5,
        marginBottom: 50,
    }
})