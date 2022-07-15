import React from 'react';
import {StyleSheet,Text,View, Image} from 'react-native';

export default function Header(){

  return(
    <View style = {styles.header}>
      <View style = {styles.headerTitle}>
        <Text style = {styles.headerText}>NFT WALLET</Text>
        <Image source = {require('../assets/NFT.png')} style = {styles.headerImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#7F7C9C',
    borderRadius: 10,
    padding: 50,
    paddingTop: 50,
    marginLeft: 0,
    marginTop:0

  },
  headerText: {
    fontWeight: 'bold',
    fontSize:35,
    fontFamily: 'Optima',
    color: '#fff',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginRight: 5
  }
});
