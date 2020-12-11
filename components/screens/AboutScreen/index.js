import React, {useEffect,useState} from "react";
import { SafeAreaView, Linking, Button, View, Text, Image, ScrollView, StyleSheet,FlatList,TouchableHighlight} from 'react-native';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import { Icon } from 'react-native-elements';
import Website from './website.js';

const renderItem = ({ item }) => (
  <TouchableHighlight >
      <View style={styles.item}>
        <Text style={styles.title}>{item.name} {item.title}</Text>
        <Text style={styles.titleClickable} onPress={()=>{dialCall(item.phone)}}>{item.phone} </Text>
        <Text style={styles.titleClickable} onPress={()=>{emailTo(item.email)}}>{item.email}</Text>
      </View>
  </TouchableHighlight>
);

const dialCall = (phoneNumber) => {
   let phoneUrl= '';
   if (Platform.OS === 'android') { phoneUrl = `tel:${phoneNumber}`; }
   else {phoneUrl = `telprompt:${phoneNumber}`; }
   Linking.openURL(phoneUrl);
};

const emailTo = (email) => {
  let emailUrl ='';
  emailUrl = `mailto:${email}`;
  Linking.openURL(emailUrl);
}


const AboutScreen = ( {navigation} ) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('https://brisksoft.herokuapp.com/api/streetends/contacts')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }, []);
    return (


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
        <Header />
        <Image
          source={{uri: 'https://i.imgur.com/F3aMEfG.jpg'}}
          style={{width: 420, height: 200, alignSelf: 'center'}}
        />

        <Text style={styles.titleText}>About Friends of Street Ends</Text>
        <Text style={styles.baseTextTitle}>IT ALL STARTED WHEN…</Text>
        <Text style={styles.newParagraph}> For over twenty years,Friends of Street Ends (FOSE) has worked to improve public shoreline access in the City of Seattle.</Text>
        <Text style={styles.newParagraph}>The City is home to 148 street ends, or right-of-way green spaces, that are open to the public.
         FOSE was first formed in as a community-response to what City's lack
          of management and protection of these spaces: in 1997, one third of the street ends
          were taken over by adjacent neighbors who had fenced off the public property for their
          private use. Another third was inaccessible due to weeds, invasive plants, and vegetation.</Text>
        <Text style={styles.newParagraph}>In its first five years, FOSE surveyed all street ends and opened or improved over twenty. Today,
        FOSE continues to work with residents and City staff to keep
        street ends healthy and the water accessible to all.</Text>
        <Text style={styles.baseTextTitle}>Notable Accomplishments</Text>
        <Text style={styles.newParagraph}>{`\u2022`} FOSE drafted the City’s first legislation and policies that put in writing
        the fact that shoreline street ends are valuable public assets and that they should be open
        for public access.</Text>
        <Text style={styles.newParagraph}>{`\u2022`} FOSE worked with Seattle’s Department of Transportation - who oversees the street end
         program - to create and implement a permit system whereby private uses would be charged an
         annual fee and the funds from this fee would be used to open and maintain other street ends;
         and to help prioritize those street ends receiving funding.</Text>
        <Text style={styles.newParagraph}>{`\u2022`} FOSE advocated for funding from a variety of other sources (e.g. $500,000
          from the 2010 Parks Levy) that opened new street ends for public access.</Text>
        <Text style={styles.newParagraph}>{`\u2022`} And for the past 20 years, FOSE provided support to neighbors and community groups
         as they have worked to open street ends for their own communities.</Text>
        <View/>
          <Website/>

          <View style={styles.container}>
              <Text style={styles.titleText}>Seattle Parks Contacts</Text>
                    <FlatList
                      data={data}
                      keyExtractor={(data, index) => {
                        return String(index);
                      }}
                      renderItem={renderItem}
                    />
        </View>
        <Footer />

        </ScrollView>

      </View>
    );
  }

  const styles = StyleSheet.create({
    baseTextTitle:{
      fontWeight: "bold",
        paddingBottom: 15,
        marginLeft:10,
        marginRight:10,

    },
    newParagraph:{
      fontFamily: "Roboto",
      alignItems: 'center',
      marginLeft:10,
      marginRight:10,
      paddingBottom: 15
    },
    titleText: {
      fontSize: 24,
      padding:5,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      alignSelf: 'center',
      color: '#80bbe2'
    },
    button:{
      backgroundColor:'#80bbe2'
    },
    item: {
    backgroundColor: '#C0C0C0',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    opacity: 0.6,
    fontWeight: "bold",
  },
   title:{
     fontSize: 18
   },
   container: {
     padding: 10,
     marginRight:10
   },
   titleClickable:{
     fontSize: 18,
     color: '#2980b9'
   },

  });

export default AboutScreen;
