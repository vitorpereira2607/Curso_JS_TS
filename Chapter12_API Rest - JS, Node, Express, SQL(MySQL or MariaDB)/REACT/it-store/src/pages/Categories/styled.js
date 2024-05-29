import styled from 'styled-components';

export const ShopCategory = styled.div`
    padding: 20px;
    background: #1e1e1e;
    width: 70%;
`;

export const ShopCategorySort = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        margin-left: 10px;
    }
`;

export const ShopCategoryProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

export const CategoryText = styled.div`
  /* Add your styling here */
`;

