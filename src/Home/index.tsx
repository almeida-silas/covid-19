import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} />
    </View>
  );
};

export default Map;
