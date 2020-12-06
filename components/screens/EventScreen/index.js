import React from 'react';
import {Button, Text, View} from 'react-native';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';

const EventScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Header />
      <Text>Events and Meetings Screen</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Footer />
    </View>
  );
};

export default EventScreen;
