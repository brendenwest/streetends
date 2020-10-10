import React from 'react';
import {
    Button,
    Text,
    View,
  } from 'react-native';


import 'react-native-gesture-handler';

const MapScreen = ( {navigation} ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
        <Button 
        title='Go Back Home'
        onPress={() => navigation.navigate("Home")} 
        />
      </View>
    );
  };

  export default MapScreen;