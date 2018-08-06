import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InfoPanel = props => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{flex: 1}}>!</Text>
      <Text style={{flex: 1}}>{props.text}</Text>
      <Text style={{flex: 1}}>!</Text>
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <InfoPanel text="jonah" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
