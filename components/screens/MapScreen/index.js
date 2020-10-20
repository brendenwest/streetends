import React from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';
import Header from '../../GlobalComponents/Header';
import 'react-native-gesture-handler';
import Footer from '../../GlobalComponents/Footer';

const MapScreen = ( {navigation} ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Map Screen</Text>
        <Button 
        title='Go Back Home'
        onPress={() => navigation.navigate("Home")} 
        />
        <Footer />
      </View>
    );
  };

  export default MapScreen;