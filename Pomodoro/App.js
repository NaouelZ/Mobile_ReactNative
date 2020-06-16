import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pomodoro from './components/Pomodoro';

export default function App() {
  return (
    <View style={styles.container}>
      <Pomodoro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F4E9E2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
