import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#4B4774',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#504E66',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 50,
    textAlign: 'center',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
