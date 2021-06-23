import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StatusBar,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Dashboard from "./components/Dashboard";



const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor="#F7F7F9"
        barStyle="dark-content"
      />
      <ScrollView>
        <View >
          <Dashboard />
        </View>
      </ScrollView>
    </View>



  );
};

const styles = StyleSheet.create({
  body: {

  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 9,
    justifyContent: 'center',
    backgroundColor: "#F7F7F9",
    // backgroundColor: '#CF6679',
  },

});

export default App;