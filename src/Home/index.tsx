import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import MapView, { Region, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

import api from '../services/api';

import styles from './styles';

interface ICases {
  data: [
    {
      uid: number;
      uf: string;
      state: string;
      cases: number;
      deaths: number;
      suspects: number;
      refuses: number;
      datetime: string;
    }
  ];
}

const Home: React.FC = () => {
  const [cases, setCases] = useState<ICases>();

  const loadCases = async () => {
    const response = await api.get<ICases>('/');

    setCases(response.data);
  };

  useEffect(() => {
    loadCases();
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView}></MapView>
    </View>
  );
};

export default Home;
