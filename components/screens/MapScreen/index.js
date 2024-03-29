import React, {useEffect, useState, useRef} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
  Callout,
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
    flex: 1,
    justifyContent:'flex-end'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },
  BtnContainer: {
    flexDirection: 'column',
    justifyContent:'flex-end',
    bottom: 15,
    padding:20,
   alignItems: 'flex-end',
  },
  btn: {
    marginTop:10
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 200,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: .6,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 12,
    marginBottom: 5,
  }
});

const MapScreen = ({navigation}) => {
  const [points, setPoints] = useState([]);

  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  const mapRef = useRef();
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

  // Get current location coordinates on start
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });

  // Re-Center map and zoom into user location on button press
  const centerUserLoc = () => {
    const userRegion = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: .02,
      longitudeDelta: .02,
    };
    mapRef.current.animateToRegion(userRegion, 1000)
  };

  const mapMarkers = () => {
return points.map((point, index) => (
        <Marker
        key={index}
        coordinate={{
          longitude: point.geometry.coordinates[0],
          latitude: point.geometry.coordinates[1],
        }}
//        title="TOTALLY"
        title={point.properties.INTERSECTION}
        >
        <Callout tooltip>
            <View>
                <View style={mapStyles.bubble}>
                    <Text style={mapStyles.name}>{point.properties.INTERSECTION}</Text>
                    <Text></Text>
                </View>
                <View style={mapStyles.arrowBorder} />
                <View style={mapStyles.arrow} />
            </View>
        </Callout>
        </Marker>
    ));
  };

  const initialRegion = () => {
    const initialRegion = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
  };
  mapRef.current.animateToRegion(initialRegion, 1000)
};

  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        showsUserLocation={false}
        showsMyLocationButton={false}
        ref={mapRef}
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
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={"You are here"}
          pinColor={'blue'}
        />
      </MapView>
      <View style={mapStyles.BtnContainer}>
      <Button
        icon={
          <Icon
            raised
            name="gps-fixed"
            size={20}
            color="white"
          />
        }
        title={ ' Location' }
        onPress={centerUserLoc}
      /> 
      <TouchableOpacity style={mapStyles.btn}><Button title={'Seattle Area'}  onPress={initialRegion}></Button></TouchableOpacity>
      </View>
    </View>
  );
};

export default MapScreen;