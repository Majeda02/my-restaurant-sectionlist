import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import MenuItems from '../../components/MenuItems';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AppHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});