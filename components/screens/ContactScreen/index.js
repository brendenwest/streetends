import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const ContactScreen = ( {navigation} ) => {
    return (
      <View style={styles.paragraph}>
        <Text style={styles.title}>PlaceHolder TExt</Text>
      <View style={styles.paragraph} />
        <Text style={styles.baseText}>Let us know if you’re interested in volunteering and contributing to Friends of Street Ends Seattle. </Text>
      <View style={styles.paragraph}/>
        <Text style={styles.baseText}>We are constantly looking for new "friends" to help us steward the City's street ends and to help neighbors protect their shoreline access.</Text>
      <View style={styles.paragraph}/>
        <Text style={styles.innerText}>Phone:  </Text>
        <Text style={styles.innerText}>Email: </Text>
        <Text style={styles.innerText}>Website: </Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    title:{
      color:'rgb(145, 195, 232)',
      fontWeight:'bold',
      textAlign: 'center',
    },
    baseText:{
      fontWeight: 'bold',
      letterSpacing: 2,
      fontFamily: 'Roboto',
      textAlign: 'center',
    },
    paragraph:{
      flex:0.35,
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems:'stretch',
    },
    innerText:{
      letterSpacing:3,
      fontStyle:'italic',
    }
  });

  export default ContactScreen;
