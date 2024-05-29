import React from 'react';
import { Popular } from '../../components/Popular/Popular';
import { Discount } from '../../components/Discount/Discount';
import { CustomPC } from '../../components/CustomPC/CustomPc';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { BaseContainer } from '../../components/BaseContainer/BaseContainer';


export const HomePage = () => {
  return (
    <>
      <BaseContainer>
        <Popular /> 
        <CustomPC />
        <Discount />  
        <NewsLetter />
      </BaseContainer>
    </>
  );
}
