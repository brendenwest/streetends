import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import useStore from '../../../hooks/useStore';

const Item = ({id, intersection, onPress}) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(id)}>
    <Text style={styles.listLink}>{intersection}</Text>
  </TouchableOpacity>
);

const ListScreen = ({navigation}) => {
  const store = useStore();

  const onPressItem = (id) => {
    navigation.navigate('Details', {id});
  };

  const renderItem = ({item}) => <Item onPress={onPressItem} {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={store.locations}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={<Header />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#36d1f7',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 5,
  },
  title: {
    fontSize: 32,
  },
  listLink: {
    color: 'black',
    fontFamily: 'Roboto',
    margin: 10,
    textAlign: 'left',
    fontSize: 14,
  },
});

export default ListScreen;
