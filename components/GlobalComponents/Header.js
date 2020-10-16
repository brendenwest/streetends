import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const Header = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {"\n"}{"\n"}
        <Text style={{fontWeight: "bold"}}>Friends of Street Ends</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Roboto",
      alignItems: 'center',
      marginLeft:10,
      marginRight:10
    },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      alignItems: 'center',
      color: '#80bbe2'
    }
  });

  export default Header;