import React from 'react';
import { Button, View, Text } from 'react-native';
import 'react-native-gesture-handler';

const AboutScreen = ( {navigation} ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button 
        title='Go Back Home'
        onPress={() => navigation.navigate("Home")} 
        />
      </View>
    );
  }

  export default AboutScreen;