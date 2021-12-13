import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
export default class ContactForm extends Component {

  constructor(){
    super();
    this.state = {
      firstName:'', 
      lastName:'',
      email:'',
      message:'',
    }
  }

  updateValue(text,field){
    if(field=='firstName'){
      this.setState({
        firstName:text,
      })
    }
    else if(field=='lastName'){
      this.setState({
        lastName:text,
      })
    }
    else if(field=='email'){
      this.setState({
        email:text,
       })
    }
    else if(field=='message'){
      this.setState({
        message:text,
       })
    }
  }
 
  submit(){
    let collection={}
    collection.firstName=this.state.firstName;
    collection.lastName=this.state.lastName;
    collection.email=this.state.email;
    collection.message=this.state.message;
    console.warn(collection);
  }

  fetchContacts = () => {
    var url = "https://streetends-api.herokuapp.com/contacts";

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(),
      headers: new Headers({ 'Content-Type': 'application/json'})
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', collection);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boxtext}>First Name</Text>
        <TextInput style={styles.input} ref="firstName" />
        <Text style={styles.boxtext}>Last Name</Text>
        <TextInput style={styles.input} ref="lastName" />
        <Text style={styles.boxtext}>Email</Text>
        <TextInput style={styles.input} ref="email" />
        <Text style={styles.boxtext}>Message</Text>
        <TextInput
          style={styles.input2}
          ref="message"
          placeholder="Enter your message"
          multiline={true}
          onChangeText={(text)=>this.updateValue(text,'message')}
        />

        <TouchableHighlight >
          <Button buttonStyle={styles.button} title="Submit" onPress={this.fetchContacts}/>
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
