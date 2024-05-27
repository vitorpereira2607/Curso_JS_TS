import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { NavbarContainer, NavLogo, NavMenu, NavLoginCart, NavCartCount, StyledLink } from './styled';

function Navbar() {
    const [menu, setMenu] = useState('home');

    return (
        <NavbarContainer>
            <NavLogo>
                <img src={logo} alt="Logo" />
                <p>PCDigaDaTemu</p>
            </NavLogo>
            <NavMenu>
                <li onClick={() => setMenu('home')}>
                    <StyledLink style={{textDecoration: 'none'}} to="/">Home</StyledLink> {menu === 'home' && <hr />}
                </li>
                <li onClick={() => setMenu('categories')}>
                <StyledLink style={{textDecoration: 'none'}} to="/categories">Categories</StyledLink> {menu === 'categories' && <hr />}
                </li>
                <li onClick={() => setMenu('build')}>
                <StyledLink style={{textDecoration: 'none'}} to="/builder">Build</StyledLink> {menu === 'build' && <hr />}
                </li>
            </NavMenu>
            <NavLoginCart>
                <StyledLink to="/login"><button>Login</button></StyledLink>
                <StyledLink to="/cart"><img src={cart_icon} alt="Cart Icon" /></StyledLink>
                <NavCartCount>0</NavCartCount>
            </NavLoginCart>
        </NavbarContainer>
    );
}

export default Navbar;
