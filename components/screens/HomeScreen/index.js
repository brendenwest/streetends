import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Header from '../../GlobalComponents/Header';
import HomeImage from './homeimage';


import {Icon} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
        <View>  
            <View style={styles.topSection}>        
              <Header />        
              <Text style={styles.titleText}>Shoreline Access for Everyone</Text>
              <HomeImage />  

              <Text style={styles.titleText}>It started with a simple, powerful idea</Text>
              <Text style={styles.newParagraph}>
              Why shouldn’t everyone should have access to Seattle's waterfronts. As our region grows, shoreline street ends 
              provide places of respite and should be protected. Since 1997, the neighbors and community leaders of Friends 
              of Street Ends have worked to open and enhance Seattle's shoreline street ends for public access.
              </Text>
              <Text style={styles.newParagraph}>
              The street ends provide a place of contemplation, a moment when you’re on a walk or run to stop to look out 
              at the lake and catch your breath, a bench for a conversation, a way to run into your neighbors and enjoy the 
              beauty of our proximity to water and mountain views.
              </Text>  
            </View>  
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  newParagraph:{
    fontFamily: "Roboto",
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,
    paddingBottom: 15
  },
  topSection: {
    fontFamily: 'Roboto',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  titleText: {
    fontSize: 24,
    padding: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    alignSelf: 'center',
    color: '#80bbe2',
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HomeScreen;
