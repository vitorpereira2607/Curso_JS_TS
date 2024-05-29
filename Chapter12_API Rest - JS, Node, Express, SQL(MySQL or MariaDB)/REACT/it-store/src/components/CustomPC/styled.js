import styled from 'styled-components';

export const CustomPCContainer = styled.div`
  padding: 20px;
  background: linear-gradient(to bottom, #f5fdfe, #fd4a32, #f5fdfe);
  width: 70%;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  color: #ffffff; 
`;

export const CustomPCContent = styled.div`
  max-width: 60%;
`;

export const CustomPCTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CustomPCDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const CustomPCButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4d23;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fd4a32;
  }
`;

export const PCImage = styled.img`
  max-width: 35%; 
  height: auto;
  border-radius: 10px;
`;
