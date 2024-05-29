import styled from 'styled-components';

export const DiscountContainer = styled.div`
  padding: 20px;
  background: #1e1e1e;
  width: 70%;
`;

export const DiscountTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const DiscountItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;