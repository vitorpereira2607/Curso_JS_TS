import React from 'react';
import { ItemContainer, ItemPrices, ItemPriceNew, ItemPriceOld } from './styled';

export const Item = (props) => {
  return (
    <ItemContainer>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <ItemPrices>
        <ItemPriceNew>{props.new_price}€</ItemPriceNew>
        <ItemPriceOld>{props.old_price}€</ItemPriceOld>
      </ItemPrices>
    </ItemContainer>
  );
};


