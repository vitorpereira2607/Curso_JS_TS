import styled from 'styled-components';

export const PopularContainer = styled.div`
  padding: 20px;
  background: #1e1e1e;
`;

export const PopularTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PopularItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;