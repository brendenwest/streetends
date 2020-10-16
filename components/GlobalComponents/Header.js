import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const Header = () => {
    return (
      <View>
        <Text style={styles.headerText}>Friends of Street Ends</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    
    headerText: {
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        color: '#5f8676'
    }
  });

  export default Header;