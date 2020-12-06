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
          <Text>Shoreline Access for Everyone</Text>
          <HomeImage />
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="map"
            size={120}
            onPress={() => navigation.navigate('Map')}
          />
          <Icon
            name="assignment"
            size={120}
            onPress={() => navigation.navigate('List')}
          />
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="info"
            size={120}
            onPress={() => navigation.navigate('About')}
          />
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="email"
            size={120}
            onPress={() => navigation.navigate("Let's Get in Touch")}
          />
          <Icon
            name="event"
            size={120}
            onPress={() => navigation.navigate('Events')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    fontFamily: 'Roboto',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  titleText: {
    fontSize: 36,
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
