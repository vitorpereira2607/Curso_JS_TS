import React from 'react';
import { Popular } from '../../components/Popular/Popular';
import { HomeContainer } from './styled';

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <Popular />   
      </HomeContainer>
    </>
  );
}
