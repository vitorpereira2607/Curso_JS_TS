import React from 'react'
import data from '../../assets/data'
import { Item } from '../Item/Item'
import { PopularContainer, PopularItemList, PopularTitle } from './styled'

export const Popular = () => {
  return (
    <PopularContainer>
      <PopularTitle>Popular Items</PopularTitle>
      <hr />
      <PopularItemList>
        {data.map((item, index) => (
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
      </PopularItemList>
    </PopularContainer>
  )
}
