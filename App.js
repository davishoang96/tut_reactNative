import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [site, setSite] = useState([
    {name: 'facebook', key: '1'},
    {name: 'kenh14', key: '2'},
    {name: 'linkedin', key: '3'},
    {name: 'seek', key: '4'},
    {name: 'coursera', key: '5'},
    {name: 'udemy', key: '6'},
    {name: 'netflix',key: 7},
    {name: 'amazon',key: 8},
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
      keyExtractor={(item)=>item.key}
      data={site}
      renderItem={({item}) =>
        <Text style={styles.item}>{item.name}</Text>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24,
    color: 'white',
  }
});
