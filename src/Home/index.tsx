import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';

import api from '../services/api';
import coordPlaces from '../utils/coordsPlaces';
import changeDateFormat from '../utils/changeDateFormat';

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
      <MapView style={styles.mapView}>
        {coordPlaces.map((places) => {
          const { uf, latitude, longitude } = places;

          const infoCases = cases?.data.find((cases) => {
            if (cases.uf === uf) {
              return cases;
            }
          });

          return (
            <Marker key={uf} coordinate={{ latitude, longitude }}>
              <Callout>
                <Text>Estado: {infoCases?.state}</Text>
                <Text>UF: {uf}</Text>
                <Text>Confirmados: {infoCases?.cases}</Text>
                <Text>Mortos: {infoCases?.deaths}</Text>
                <Text>Suspeitos: {infoCases?.suspects}</Text>
                <Text>Negados: {infoCases?.refuses}</Text>
                {infoCases?.datetime && (
                  <Text>
                    Última atualização: {changeDateFormat(infoCases.datetime)}
                  </Text>
                )}
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Home;
