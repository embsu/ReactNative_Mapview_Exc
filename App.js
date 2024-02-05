import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Map from './screens/Map';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import MainAppBar from './components/MainAppBar';

import { PaperProvider } from 'react-native-paper';

const settings = {
  backgroundColor: '#f2f2f2',
}

const icons = {
  location_not_known: 'crosshairs',
  location_searching: 'crosshairs-question',
  location_found: 'crosshairs-gps',
}

export default function App() {
  const [icon, setIcon] = useState(icons.location_not_known)
  const [location, setLocation] = useState(
    {
      latitude: 65.0800,
      longitude: 25.4800,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  )

  const getUserPosition = async () => {
    setIcon(icons.location_searching);
    let { status } = await Location.requestForegroundPermissionsAsync();

    try {
      if (status !== 'granted') {
        setIcon(icons.location_not_known);
        console.log('Permission to access location was denied');
        return;
      }

      const position = await Location.getCurrentPositionAsync({ accurancy: Location.Accuracy.High });
      setLocation({ ...location, latitude: position.coords.latitude, longitude: position.coords.longitude });

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <PaperProvider>
      <MainAppBar
        title='Map'
        backgroundColor={settings.backgroundColor}
        icon={icon}
        getUserPosition={getUserPosition}
      />
      <SafeAreaView style={styles.container}>
        <Map location={location} />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});



