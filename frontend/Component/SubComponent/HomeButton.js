import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const HomeButton = ({onPress, title, backgroundColor, textColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, {backgroundColor}]}>
    <Text style={[styles.text, {color: textColor}]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    width: '70%',
    height: 55,
    // marginLeft: 10
    alignSelf: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 6,
    Color: '#f5f5f5',
  },
});

export default HomeButton;
