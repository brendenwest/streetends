import React, {Component} from 'react';
import {
  Linking,
  Platform,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
export default class Website extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'info'}}
          title="Go to our website"
          onPress={() => Linking.openURL('https://www.streetends.org')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5f8676',
  },
  container: {
    padding: 10,
  },
  container:{
    padding:10,
    marginRight:40,
    marginLeft:30
  }
});
