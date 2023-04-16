import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Module1 from './../../mobile_module_one';
import Module2 from './../../mobile_module_two';

const Stack = createStackNavigator();

const RouterRoot: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela1" component={Tela1} />
      <Stack.Screen
        name="Tela2"
        component={Tela2}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="Modulo1" component={Module1} />
      <Stack.Screen name="Modulo2" component={Module2} />
    </Stack.Navigator>
  );
};

export default RouterRoot;
