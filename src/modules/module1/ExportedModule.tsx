import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';

const Stack = createStackNavigator();

const RouterRoot: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Module1_Tela1" component={Tela1} />
      <Stack.Screen
        name="Module1_Tela2"
        component={Tela2}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default RouterRoot;
