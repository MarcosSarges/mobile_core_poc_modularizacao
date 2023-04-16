import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import RouterRoot from './Router';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RouterRoot />
    </NavigationContainer>
  );
};

export default App;
