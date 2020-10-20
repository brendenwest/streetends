import React, { Component } from "react";
import {Linking,Text,TouchableOpacity, StyleSheet, View} from "react-native";
import { Icon, Button } from 'react-native-elements'
export default class SendEmail extends Component {

  render(){
         return(
             <Button
               raised
               buttonStyle={styles.button}
               icon={{name:'email'}}
               title= ' Email Us'
               onPress={()=>Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')}
             />
               )
   }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#5f8676'
  }
});
