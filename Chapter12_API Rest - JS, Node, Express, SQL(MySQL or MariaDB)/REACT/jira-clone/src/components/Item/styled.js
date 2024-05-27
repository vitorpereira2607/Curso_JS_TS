import styled from 'styled-components';

export const ItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
  background: #282828;

  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  &:hover {
    transform: translateY(-5px); 
  }
`;

export const ItemPrices = styled.div`
  margin-top: 10px;
`;

export const ItemPriceNew = styled.span`
  color: #FFFF;
  font-weight: bold;
`;

export const ItemPriceOld = styled.span`
  color: #ff4141;
  text-decoration: line-through;
`;