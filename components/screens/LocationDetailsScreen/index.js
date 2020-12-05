import React from 'react';
import {
    SafeAreaView,
    Text,
  } from 'react-native';
import Footer from '../../GlobalComponents/Footer';
import Header from '../../GlobalComponents/Header';

const LocationDetailsScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Location Details Screen</Text>
        <Footer />
      </SafeAreaView>
    );
  };

export default LocationDetailsScreen;