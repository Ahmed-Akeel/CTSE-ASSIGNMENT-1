/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  

  return (
    <SafeAreaView>
      {/* <StatusBar/> */}
      <ScrollView>
       
        <View>
             <Text style={styles.title}>Welcome to CTSE </Text>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title : {
    fontSize: 30,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  }
});

export default App;