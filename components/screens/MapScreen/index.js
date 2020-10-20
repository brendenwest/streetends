import React, { useEffect, useState } from 'react';
import {
    Button,
    Text,
    View,
    Platform,
    Dimensions,
    StyleSheet,
  } from 'react-native';
  import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';


import 'react-native-gesture-handler';

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';
const { width, height } = Dimensions.get('window');

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

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [mapview, setMapview] = useState(true);

  useEffect(() => {
    fetch('http://fosetest.org/Street_Ends__Shoreline_.geojson')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => {setLoading(false)
      });
  }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={mapStyles.container}>
                 <MapView

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
                 </MapView>
               </View>

      </View>
    );
  };

  export default MapScreen;