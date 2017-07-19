import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Bar extends Component {
  render() {
    return (
        <View style={styles.bar}>

          <View style={[styles.barItem, styles.barseparator]}>
            <Text style={styles.barTop}>10</Text>
            <Text style={styles.barBottom}>Events</Text>
          </View>

          <View style={styles.barItem}>
            <Text style={styles.barTop}>322</Text>
            <Text style={styles.barBottom}>Hours</Text>
          </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
  bar: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#5DADE2',
    flexDirection: 'row'
  },
  barseparator: {
    borderRightWidth: 4
  },
  barItem: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom: {
    color: '#000',
    fontSize:14,
    fontWeight: 'bold',
  }
});
