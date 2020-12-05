import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from './components/screens/AboutScreen';
import ContactScreen from './components/screens/ContactScreen';
import HomeScreen from './components/screens/HomeScreen';
import MapScreen from './components/screens/MapScreen';
import EventScreen from './components/screens/EventScreen';
import ListScreen from './components/screens/ListScreen'
import LocationDetailsScreen from './components/screens/LocationDetailsScreen';

import { StoreProvider } from './hooks/useStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider>
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
          <Stack.Screen
            name="Details" 
            component={LocationDetailsScreen} />
          <Stack.Screen
            name="List" 
            component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
