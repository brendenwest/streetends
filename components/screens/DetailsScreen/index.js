import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';

const DetailsScreen = ( {navigation}, props ) => {
    const [data, setData] = useState([]);

    getDetail = (item) => {
        navigation.navigate('Detail', { item })
      }

    const renderItem = ({ item }) => (
        <TouchableHighlight onPress={getDetail.bind(this, item)} underlayColor="white">
            <View>
              <Text style={styles.baseText}>{item.name} - {item.zip_code}</Text>
            </View>
        </TouchableHighlight>
      );

    useEffect(() => {
        fetch('https://data.seattle.gov/resource/v5tj-kqhc.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
      }, []);

    return (
        
        <FlatList
        ListHeaderComponent={
        <>
          <Header />
            <Image source={{uri: "https://i.imgur.com/XJFeun1.jpg"}} style={{width: 420, height: 200, alignSelf: 'center'}} />
            <Text style={styles.titleText}>About This Street End</Text>
        </>
        }

        data={data}
        keyExtractor={item => item.pmaid}
        renderItem={renderItem}

        ListFooterComponent={
            <>
            <Text style={styles.titleText}>
                {"\n"}
                {"\n"}
                If you would like to leave a comment or concern about this street end, please submit below:
                {"\n"}{"\n"}
                {/* Comment submission WIP */}
            </Text>
          <Footer />
          </>
        }/>
    );
}
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Roboto",
      alignItems: 'center',
      marginLeft:10,
      marginRight:10
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
    }
  });

  export default DetailsScreen;