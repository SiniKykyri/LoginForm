import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Login from './screens/Login';

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}


