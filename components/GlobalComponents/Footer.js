import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View style={styles.footerView}>
      <Text
        onPress={() => navigation.navigate('Contact')}
        style={styles.headerText}>
        FRIENDS OF STREET ENDS{'\n'} — {'\n'}enjoy public access to our
        waterfront{'\n'}
        {'\n'}CONTACT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  headerText: {
    padding: 30,
    fontSize: 16,
    fontFamily: 'sans-serif-condensed',
    color: '#ffffff',
    backgroundColor: '#80bbe2',
    textAlign: 'center',
  },
});

export default Footer;
