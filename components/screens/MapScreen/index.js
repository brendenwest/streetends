import React from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';
  import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import Header from '../../GlobalComponents/Header';
import 'react-native-gesture-handler';

const MapScreen = ( {navigation} ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header />
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
   
        <Footer />
      </View>
    );
  };

  export default MapScreen;