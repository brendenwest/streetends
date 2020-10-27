import React, { Component } from "react";
import {Linking,Platform,TouchableOpacity,Text, StyleSheet, View} from "react-native";
import { Icon, Button } from 'react-native-elements'
export default class MakeCall extends Component {

 dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 render(){
        return(
          <View style={styles.container}>
            <Button
              raised
              buttonStyle={styles.button}
              icon={{name:'phone'}}
              title= '(123)456-7890 '
              onPress={()=>{this.dialCall(1234567890)}}
            />
            </View>
          )
  }
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:'#5f8676'
  },
  container:{
    padding:10,
  }
});
