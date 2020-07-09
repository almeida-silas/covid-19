import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';

import MapView from 'react-native-maps';
import * as Location from 'expo-location';

import styles from './styles';

const Map: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationData>();

  const handleCurrentPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    handleCurrentPosition();
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} />
    </View>
  );
};

export default Map;
