import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../../GlobalComponents/Header';

import { Icon } from 'react-native-elements'

const HomeScreen = ( {navigation } ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header />
      <Text>Shoreline Access for Everyone</Text>
      <Image 
        source={{uri: "https://i.imgur.com/F3aMEfG.jpg"}} 
        style=
          {{padding: 40, 
            width: 420, 
            height: 200, 
            alignSelf: 'center'}} 
      />
        
      <Icon
          name='map'
          size={150}
          onPress={() => navigation.navigate('Map')}
      />      
      
      <Icon
          name='event'
          size={150}
          onPress={() => navigation.navigate('Map')}
      />      
   
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Let's Get in Touch")}
      />
    </View>

    
  );
}

export default HomeScreen;
