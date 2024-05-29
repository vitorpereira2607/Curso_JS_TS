import React from 'react'
import data_product from '../../assets/data'
import { Item } from '../Item/Item'

import { DiscountContainer, DiscountTitle, DiscountItemList } from './styled'
export const Discount = () => {
  return (
    <DiscountContainer>
        <DiscountTitle>Popular Discounts</DiscountTitle>
        <hr />
        <DiscountItemList>
            {data_product.map((item, index) => (
                <Item
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
        </DiscountItemList>
    </DiscountContainer>
  )
}
