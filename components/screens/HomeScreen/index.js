import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../../GlobalComponents/Header';
import HomeImage from './homeimage';

import { Icon } from 'react-native-elements'
import { greaterThan } from 'react-native-reanimated';

const HomeScreen = ( {navigation } ) => {
  return (
    <ScrollView>

        <View>  
            <View style={styles.topSection}>        
              <Header />        
              <Text>Shoreline Access for Everyone</Text>
              <HomeImage />    
            </View>  

            <View style={styles.iconRow}>
              <Icon
                name='map'
                size={120}
                onPress={() => navigation.navigate('Map')}
              />              
              <Icon
                name='event'
                size={120}
                onPress={() => navigation.navigate('Events')}
              />
            </View>

            <View style={styles.iconRow}>                
              <Icon
                name='email'
                size={120}
                onPress={() => navigation.navigate("Let's Get in Touch")}    
              />            
              <Icon
                name='info'
                size={120}
                onPress={() => navigation.navigate('About')}
              />                
            </View>

            <View style={styles.testing}>
              <Icon 
                name='park'
                size={20}
                onPress={() => navigation.navigate('Details')}
                />    
                <Text>(Details Screen Testing)</Text>
            </View>
    </View>

    </ScrollView>

    
  );
}

const styles = StyleSheet.create({

  topSection: {
    fontFamily: "Roboto",
    alignItems: 'center',
    marginLeft:10,
    marginRight:10
  },
  titleText: {
    fontSize: 24,
    padding:5,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    alignSelf: 'center',
    color: '#80bbe2'
  },
  iconRow:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15
  },
  testing:{
    alignItems: 'center',
    marginBottom: 15
  }
});

export default HomeScreen;
