import React from 'react';
import { Button, View, Text } from 'react-native';
import 'react-native-gesture-handler';

const HomeScreen = ( {navigation } ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
