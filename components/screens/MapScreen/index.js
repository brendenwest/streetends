import React, {useEffect, useState} from 'react';
import {
  Platform,
  Dimensions,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import Header from '../../GlobalComponents/Header';
import 'react-native-gesture-handler';
import Footer from '../../GlobalComponents/Footer';

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';
const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 47.6168776;
const LONGITUDE = -122.3376114;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MapScreen = ({navigation}) => {
  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        initialCamera={{
          center: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 11,
        }}
      />
    </View>
  );
};

export default MapScreen;
