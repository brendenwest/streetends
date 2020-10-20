import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import { Icon } from 'react-native-elements'
import MakeCall from './phone.js'
import SendEmail from './email.js'
import Website from './website.js'

const AboutScreen = ( {navigation} ) => {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
        <Header />
        <Image source={{uri: "https://i.imgur.com/F3aMEfG.jpg"}} style={{width: 420, height: 200, alignSelf: 'center'}} />

        <Text style={styles.titleText}>About Friends of Street Ends</Text>

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />

        <Text style={styles.baseText}>
        {"\n"}
        <Text style={{fontWeight: "bold"}}>IT ALL STARTED WHEN…</Text>
        {"\n"}{"\n"}
        For over twenty years, <Text style={{fontWeight: "bold"}}>Friends of Street Ends</Text> (FOSE) has worked to improve public shoreline access in the City of Seattle.
        {"\n"}{"\n"}
        The City is home to 148 street ends, or right-of-way green spaces, that are open to the public. FOSE was first formed in as a community-response to what City's lack of management and protection of these spaces: in 1997, one third of the street ends were taken over by adjacent neighbors who had fenced off the public property for their private use. Another third was inaccessible due to weeds, invasive plants, and vegetation.
        {"\n"}{"\n"}
        In its first five years, FOSE surveyed all street ends and opened or improved over twenty. Today, FOSE continues to work with residents and City staff to keep street ends healthy and the water accessible to all.
        {"\n"}{"\n"}
        <Text style={{fontWeight: "bold"}}>Notable Accomplishments</Text>
        {"\n"}{"\n"}
        {`\u2022`} FOSE drafted the City’s first legislation and policies that put in writing the fact that shoreline street ends are valuable public assets and that they should be open for public access.
        {"\n"}{"\n"}
        {`\u2022`} FOSE worked with Seattle’s Department of Transportation - who oversees the street end program - to create and implement a permit system whereby private uses would be charged an annual fee and the funds from this fee would be used to open and maintain other street ends; and to help prioritize those street ends receiving funding.
        {"\n"}{"\n"}
        {`\u2022`} FOSE advocated for funding from a variety of other sources (e.g. $500,000 from the 2010 Parks Levy) that opened new street ends for public access.
        {"\n"}{"\n"}
        {`\u2022`} And for the past 20 years, FOSE provided support to neighbors and community groups as they have worked to open street ends for their own communities.
        </Text>
        <View/>
          <MakeCall/>
          <SendEmail/>
          <Website/>
        <Footer />
        </ScrollView>
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
    },
    button:{
      backgroundColor:'#80bbe2'
    }
  });

  export default AboutScreen;
