import React from 'react';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';

const Tela2: React.FC = () => {
  const {navigate} = useNavigation<any>();

  return (
    <Styled.Container>
      <Styled.Title>Tela 2</Styled.Title>
      <Styled.Button
        onPress={() => {
          navigate('Modulo1');
        }}>
        <Styled.TextButton>Navegar modulo1</Styled.TextButton>
      </Styled.Button>
      <Styled.Button
        onPress={() => {
          navigate('Modulo2');
        }}>
        <Styled.TextButton>Navegar modulo2</Styled.TextButton>
      </Styled.Button>
    </Styled.Container>
  );
};

export default Tela2;
