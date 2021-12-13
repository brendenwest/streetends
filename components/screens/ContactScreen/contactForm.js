import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
export default class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  }

  updateValue(text, field) {

    if (field == 'firstname') {
      this.setState({
        firstName: text,
      })
    }
    else if (field == 'lastname') {
      this.setState({
        lastName: text,
      })
    }
    else if (field == 'email') {
      this.setState({
        email: text,
      })
    }
    else if (field == 'message') {
      this.setState({
        message: text,
      })
    }
  }

  submit() {

    let { firstName, lastName, email, message } = this.state

    if (firstName === '' || lastName === '' || email === '' || message === '') {
    
        Alert.alert(
          "Alert",
          "Please fill all the fields",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );

      return
    }else{
      this.submitContactData()
    }

  }

  submitContactData = () => {
    let { firstName, lastName, email, message } = this.state
    let payload = { firstName, lastName, email, message }

    console.log("payload", payload)

    var url = "https://streetends-api.herokuapp.com/contacts";

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert(
          "Alert",
          "Data Saved Successfully!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error('Error:', error);

        Alert.alert(
          "Alert",
          "Problem saving your data please try again later",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boxtext}>First Name</Text>
        <TextInput style={styles.input} ref="firstName" onChangeText={(text) => this.updateValue(text, 'firstname')} />
        <Text style={styles.boxtext}>Last Name</Text>
        <TextInput style={styles.input} ref="lastName" onChangeText={(text) => this.updateValue(text, 'lastname')} />
        <Text style={styles.boxtext}>Email</Text>
        <TextInput style={styles.input} ref="email" onChangeText={(text) => this.updateValue(text, 'email')} />
        <Text style={styles.boxtext}>Message</Text>
        <TextInput
          style={styles.input2}
          ref="message"
          placeholder="Enter your message"
          multiline={true}
          onChangeText={(text) => this.updateValue(text, 'message')}
        />

        <TouchableHighlight >
          <Button buttonStyle={styles.button} title="Submit" onPress={()=>{this.submit()}} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5f8676',
  },
  container: {
    marginVertical: 8,
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 16,
    height: 40,
    margin: 8,
    marginTop: 2,
    color: '#c0cbd3',
  },
  input2: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    height: 200,
    color: '#c0cbd3',
    textAlignVertical: 'top',
    paddingTop: 10,
    paddingBottom: 0,
    margin: 8,
  },
  boxtext: {
    marginLeft: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#5f8676',
  },
});
