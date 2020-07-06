import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Home';

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Routes;
