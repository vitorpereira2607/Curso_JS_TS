import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
  background: #282828;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

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
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ItemPriceNew = styled.span`
  color: #FFFF;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ItemPriceOld = styled.span`
  color: #ff4141;
  text-decoration: line-through;
`;

export const ItemDescription = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow:ellipsis;
`