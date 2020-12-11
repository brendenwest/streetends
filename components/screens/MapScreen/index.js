import React, {useEffect, useState} from 'react';
import {
    Platform,
    Dimensions,
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import Header from '../../GlobalComponents/Header';
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

const MapScreen = ( {navigation} ) => {
  const [points, setPoints] = useState([]);
  useEffect(() => {
    fetch('http://fosetest.org/Street_Ends__Shoreline_.geojson')
      .then((response) => response.json())
      .then((json) => {setPoints(json.features); console.log(json)})
      .catch((error) => console.error(error))
      .finally(() => {setLoading(false);
        console.log(points)});
  }, []);
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
          >
          {points.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{'longitude': marker.geometry.coordinates[0], 'latitude': marker.geometry.coordinates[1]}}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  };

export default MapScreen;
