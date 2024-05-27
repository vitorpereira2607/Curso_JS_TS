import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFF;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  box-shadow: 0 1px 3px -2px black;
  position: relative;
  background: #282828;
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    margin: 0 15px;

    p {
        font-size: 1.5em;
        font-weight: bold;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    gap: 20%;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
    }

    hr {
        border: none;
        width: 80%;
        height: 3px;
        border-radius: 10px;
        background: #FF4141;
    }
`;

export const NavLoginCart = styled.div`
   display: flex;
   align-items: center;
   gap: 30%;
   position: relative;

   button {
    width: 150px;
    height: 40px;
    outline: none;
    border: 1px solid #7a7a7a;   
    border-radius: 10px;
    color: #515151;
    background: white;
    cursor: pointer;
    &:active {
        background: #f3f3f3;
    }
    }

    img {
        height: 35px;
        cursor: pointer;
        position: relative;
    }
`;

export const NavCartCount = styled.div`
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 25px;
    right: -55px;
    border-radius: 11px;
    transform: translate(50%, -50%);
    font-size: 14px;
    background: red;
    color: white
`


