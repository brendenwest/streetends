import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import ContactForm from './contactForm.js';
import HeroContactForm from './heroContact.js';
const ContactScreen = ( {navigation} ) => {
    return (
      <ScrollView>
        <Header />
        <HeroContactForm/>
          <View style={styles.paragraph}>
            <Text style={styles.baseText}>Let us know if you’re interested in volunteering and contributing to Friends of Street Ends Seattle. </Text>
          <View style={styles.paragraph}/>
            <Text style={styles.baseText}>We are constantly looking for new "friends" to help us steward the City's street ends and to help neighbors protect their shoreline access.</Text>
          </View>
          <ContactForm />
          <Footer />
      </ScrollView>
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
      padding:10,
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
