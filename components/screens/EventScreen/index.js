//import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
//import styles from './styles';
import { 
  StyleSheet,
  Text, 
  View, 
  Image,
  FlatList, 
  ActivityIndicator, 
  VirtualizedList,
  SafeAreaView
} from 'react-native';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const eventsURL = "https://brisksoft.herokuapp.com/api/streetends/schedule"; 


const EventScreen = () => {
  const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [meetings, setMeetings] = useState([]);     

  useEffect(() => {
    fetch(eventsURL)
      .then((Response) => Response.json())
      .then((json) => {
        setEvents(json.events);
        setMeetings(json.meetings);
      })
      .catch((error) => alert(error))
      .finally(setLoading(false));
  }, []);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      marginLeft: 8,
      fontFamily: "Roberto",
      alignItems: 'center',
      fontWeight: "bold",
      fontSize: 18,
      paddingTop: 24,
      paddingBottom: 12
    },
    baseText: {
      fontFamily: "Roboto",
      alignItems: 'center',
      marginLeft:10,
      marginRight:10
    },
    titleText: {
      fontSize: 30,
      padding:5,
      fontWeight: "300",
      fontFamily: "acumin-pro-extra-condensed", //"sans-serif-condensed",
      alignSelf: 'center',
      color: '#2c634e'
    },
    button:{
      backgroundColor:'#80bbe2'
    }
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ScrollView>
    <Header />
    <Image source={{uri: "https://images.squarespace-cdn.com/content/v1/5cb3ea9811f7841dcb5717fc/1558139030657-FBWH28BF1VMZI5PU0A1U/ke17ZwdGBToddI8pDm48kOr6fpXnNv0C2gTxB2n56yp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZ2r1pl2YpRZws_c0qFWLn1c8OKzY-T331mDrBnHYXHO0mlp7cGNipU5tTKIxUWi9Q/Pathway+.jpg?format=1000w"}} style={{width: 420, height: 200, alignSelf: 'center'}} />

    <Text style={style.titleText}>2020 Meetings And Events </Text>
    
     <View> 
          <View>
            <Text style={style.headerTitle}>UPCOMING EVENTS:</Text>
          {
            events.map((item, key) => (
              <Text key={key} style={{padding: 8, fontSize: 14}}> 
              {item}
                </Text>
            ))
          }
          </View>
          <View>
          <Text style={style.headerTitle}>UPCOMING MEETINGS:</Text>
          {
            meetings.map((item, key) => (
              <Text key={key} style={{fontWeight:"bold", padding: 8, fontSize: 14 }}> 
              {item}
                </Text>
            ))
          }
          </View>  
      </View> 
     <Footer />
    </ScrollView>


  </View>
  );
}; 

export default EventScreen;