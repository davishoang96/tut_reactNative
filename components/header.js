import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>
        My Todo List
      </Text>
    </View>
  )
} 


const styles = StyleSheet.create({
  header:{
    height: 80,
    padding: 38,
    backgroundColor: 'pink',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  }
})