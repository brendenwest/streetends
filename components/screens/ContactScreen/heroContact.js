import FullWidthImage from 'react-native-fullwidth-image';
import {View} from 'react-native';
import React, {Component} from 'react';

export default class HeroContactForm extends Component {
  render() {
    return (
      <View>
        <FullWidthImage source={{uri: 'https://i.imgur.com/lGNdVql.jpg'}} />
      </View>
    );
  }
}
