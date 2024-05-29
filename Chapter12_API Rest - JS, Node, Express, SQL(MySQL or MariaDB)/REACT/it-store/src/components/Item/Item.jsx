import React from 'react';
import { ItemDescription, ItemContainer, ItemPrices, ItemPriceNew, ItemPriceOld } from './styled';

export const Item = (props) => {
  return (
    <ItemContainer>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <ItemDescription>
        {props.description}
      </ItemDescription>
      <ItemPrices>
        <ItemPriceNew>{props.price}€</ItemPriceNew>
        <ItemPriceOld>{props.oldPrice}€</ItemPriceOld>
      </ItemPrices>
    </ItemContainer>
  );
};


