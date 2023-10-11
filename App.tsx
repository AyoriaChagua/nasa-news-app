
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10, 15, 40)',
    padding: 20
  }
})

export default App;
