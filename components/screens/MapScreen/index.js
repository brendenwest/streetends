import React, {useEffect, useState} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import Geolocation from 'react-native-geolocation-service';
const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';
const {width, height} = Dimensions.get('window');
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ASPECT_RATIO = width / height;
const LATITUDE = 47.6168776;
const LONGITUDE = -122.3376114;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    position: 'absolute',
    alignItems: 'right',
  },
});

const MapScreen = ({navigation}) => {
  const [points, setPoints] = useState([]);

  const [userLocation, setUserLocation] = useState({latitude: 0, longitude:0})

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({latitude: position.coords.latitude,  longitude: position.coords.longitude})
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
  useEffect(() => {
    fetch('http://fosetest.org/Street_Ends__Shoreline_.geojson')
      .then((response) => response.json())
      .then((json) => {
        setPoints(json.features);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
        console.log(points);
      });
  }, []);

  const mapMarkers = () => {
    return points.map((point, index) => (
      <Marker
        key={index}
        coordinate={{
          longitude: point.geometry.coordinates[0],
          latitude: point.geometry.coordinates[1],
        }}
        title={point.properties.INTERSECTION}
        description={point.properties.COMMENTS}></Marker>
    ));
  };

  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        showsUserLocation={true}
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
        }}>
        {mapMarkers()}
        <Marker
          coordinate={{latitude: userLocation.latitude, longitude: userLocation.longitude}}
        />
      </MapView>
      <Button
        icon={
          <Icon
            raised
            name="gps-fixed"
            size={15}
            color="white"
            iconPosition="right"
          />
        }
        style={mapStyles.button}
        //onPress={getUserLocation}
      />
    </View>
  );
};

export default MapScreen;
