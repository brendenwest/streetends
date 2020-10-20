import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from './components/screens/AboutScreen';
import ContactScreen from './components/screens/ContactScreen';
import HomeScreen from './components/screens/HomeScreen';
import MapScreen from './components/screens/MapScreen';
import EventScreen from './components/screens/EventScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }} />
        <Stack.Screen
          name="Map"
          component={MapScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen} />
        <Stack.Screen
          name="Events"
          component={EventScreen} />          
          <Stack.Screen
          name="Let's Get in Touch" 
          component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
