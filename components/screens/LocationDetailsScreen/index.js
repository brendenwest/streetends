import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Footer from '../../GlobalComponents/Footer';
import Header from '../../GlobalComponents/Header';
import useStore from '../../../hooks/useStore';

const LocationDetailsScreen = ({navigation, route}) => {
  const {getLocation} = useStore();

  const location = getLocation(route.params.id);

  console.log(location);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Header />
      <Text>{location.intersection}</Text>
      <Footer />
    </SafeAreaView>
  );
};

export default LocationDetailsScreen;
