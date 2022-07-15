import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';


import Header from './components/header';
import Card from './components/card';



export default function Home({ navigation }) {

  const [tickets, setTickets] = useState([
    
  ]);
  Linking.addEventListener("url", (e) => {
        let data = Linking.parse(e.url);
        if (!data.queryParams)
          return;
        setTickets([...tickets, {
          desc: data.queryParams.desc,
          title: data.queryParams.title,
          signed: data.queryParams.signed,
          original: data.queryParams.original,
          key: tickets.length+1
        }])

  })
  return (
    <ImageBackground source = {require('./assets/appBackground2.png')} style = {styles.container}>

     <StatusBar
    backgroundColor="#191443"
    barStyle="light-content"/>
      <View style={styles.container}>
      <Header />
      <Text style = {styles.space}>
      </Text>
      <FlatList
        data = {tickets}
        renderItem = {({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PassInfo',item)}>
            <Card>
            <Text style = {styles.text}>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    paddingBottom: 150,
  },
  space: {
    padding:25,
    marginTop: 10
  },
  text: {
    fontSize:35,
    color:'#fff',
    textAlign: 'center',
  },
});
