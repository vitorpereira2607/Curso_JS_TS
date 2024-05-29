import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import dropdow_icon from '../../assets/dropdown_icon.png';
import { Item } from '../../components/Item/Item';
import { ShopCategory, ShopCategorySort, ShopCategoryProducts, CategoryText } from './styled';
import { BaseContainer } from '../../components/BaseContainer/BaseContainer';
import { ProductsContainer } from '../../components/ProductsContainer/ProductsContainer';

export const Categories = (props) => {
    const { data } = useContext(ShopContext);

    return (
        <BaseContainer>
            <ProductsContainer>
                <ShopCategory>
                    <CategoryText>
                        <span>Showing 1-12</span> out of 36
                    </CategoryText>
                </ShopCategory>
                <ShopCategorySort>
                    Sort by <img src={dropdow_icon} alt="Sort dropdown icon" />
                </ShopCategorySort>
                <ShopCategoryProducts>
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
                </ShopCategoryProducts>
            </ProductsContainer>
        </BaseContainer>
    );
};
