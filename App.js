import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/header";

export default function App() {

  const [todoData, setTodoData] = useState ([
    {text: 'buy new phone', key: 1},
    {text: 'learn PTE', key: 2},
    {text: 'pay $140 for credit card', key: 3},
    {text: 'bid smocking machine', key: 4},
  ])

  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
            data={todoData}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40
  },
  list:{
    marginTop: 20
  }


});
