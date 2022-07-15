import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import QRCode from 'react-native-qrcode-svg';

// You can import from local files
import Header from './components/header';
import Card from './components/card';

export default function PassInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.text}>{navigation.getParam('title')}</Text>
        <Text style={styles.text}>{navigation.getParam('desc')}</Text>
        <QRCode
          size={250}
          style={styles.qrcode}
          value={JSON.stringify({
            signed: navigation.getParam('signed'),
            original: navigation.getParam('original'),
          })}
        />
      </Card>
      <Text style={styles.space}>INVISIBLE TEXT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 5,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#0A2549',
    paddingTop: 50,
  },
  space: {
    paddingBottom: '100%',
    color: '#0A2549',
  },
  qrcode: {
    marginTop: 20,
  },
});
