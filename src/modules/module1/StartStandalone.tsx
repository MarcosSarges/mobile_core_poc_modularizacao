import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RouterRoot from './ExportedModule';
import 'react-native-gesture-handler';

const StartStandalone: React.FC = () => {
  return (
    <NavigationContainer>
      <RouterRoot />
    </NavigationContainer>
  );
};

export default StartStandalone;
