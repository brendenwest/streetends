import React from 'react';
import { Button, View, Text } from 'react-native';
import 'react-native-gesture-handler';

const ContactScreen = ( {navigation} ) => {
    return (
<View style={{
  flex:1,
  flexDirection:'column',
  justifyContent: 'flex-start',
  alignItems:'stretch',
}}>

      <View style={{backgroundColor:'powderblue'}} />
      <Text>Test</Text>
      <View style={{backgroundColor:'yellow'}} />
        <Text>Contact Us</Text>
        <Button
        title='Go Back Home'
        onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }

  export default ContactScreen;
