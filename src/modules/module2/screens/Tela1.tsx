import React from 'react';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';

const Tela1: React.FC = () => {
  const {navigate} = useNavigation<any>();

  return (
    <Styled.Container>
      <Styled.Title>Tela 1 module 2 </Styled.Title>
      <Styled.Button
        onPress={() => {
          navigate('Module2_Tela2');
        }}>
        <Styled.TextButton>Navegar</Styled.TextButton>
      </Styled.Button>
    </Styled.Container>
  );
};

export default Tela1;
