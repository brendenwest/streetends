import React from 'react';
import { 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View, 
} from 'react-native';

import Header from '../../GlobalComponents/Header';
import Footer from '../../GlobalComponents/Footer';
import useStore from '../../../hooks/useStore';

const Item = ({ id, title, onPress }) => (
  <TouchableOpacity
     style={styles.item}
     onPress={() => onPress(id)}
  >
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

const ListScreen = ({ navigation }) => {
  const store = useStore();
  
  const onPressItem = (id) => {
    navigation.navigate('Details')
    console.log(id);
  };
  
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({ item }) => (
    <Item 
        onPress={onPressItem}
        {...item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    backgroundColor: '#f9c2ff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  listLink: {
    color: 'red',
    fontFamily: "Roboto",
    margin: 10,
    textAlign: 'left',
  },
});

export default ListScreen;