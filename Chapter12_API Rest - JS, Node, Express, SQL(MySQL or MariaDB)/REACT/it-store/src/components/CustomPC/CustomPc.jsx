import React from 'react';
import { CustomPCContainer, CustomPCContent, CustomPCTitle, CustomPCDescription, CustomPCButton, PCImage } from './styled';
import custom_pc from '../../assets/custom_pc.png'; 

export const CustomPC = () => {
  return (
    <CustomPCContainer>
      <CustomPCContent>
        <CustomPCTitle>Build Your Own Custom PC</CustomPCTitle>
        <CustomPCDescription>
        Choose the options that suit you and don’t waste time. See the best options for a high-performance PC.
        </CustomPCDescription>
        <CustomPCButton>
          Start Building
        </CustomPCButton>
      </CustomPCContent>
      <PCImage src={custom_pc} alt="Custom PC" />
    </CustomPCContainer>
  );
};


