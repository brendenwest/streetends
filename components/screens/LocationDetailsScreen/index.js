import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Footer from '../../GlobalComponents/Footer';
import Header from '../../GlobalComponents/Header';
import useStore from '../../../hooks/useStore';

const LocationDetailsScreen = ({navigation, route}) => {
  const {getLocation} = useStore();

  const location = getLocation(route.params.id);

  console.log(location);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.intersection}>{location.intersection}</Text>
      <View>
        <Image
          style={styles.photo}
          source={{
            uri: location.photo,
          }}
        />
        <Text style={styles.intersection}>{location.description}</Text>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: 350,
    height: 200,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intersection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LocationDetailsScreen;
