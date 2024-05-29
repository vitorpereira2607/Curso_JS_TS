import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import { FooterContainer, FooterLogo, FooterList, FooterLink, FooterSocials, FooterIconsContainer } from './styled'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo>
            <img src={footer_logo} alt="" />
            <p>PCDigaDaTemu</p>
        </FooterLogo>
        <FooterList>
          <FooterLink>Company</FooterLink>
          <FooterLink>Products</FooterLink>  
          <FooterLink>Offices</FooterLink>  
          <FooterLink>About</FooterLink>  
          <FooterLink>Contact</FooterLink>     
        </FooterList>
        <FooterSocials>
            <FooterIconsContainer>
                <img src={linkedin_icon} alt="" />
            </FooterIconsContainer>
            <FooterIconsContainer>
                <img src={github_icon} alt="" />
            </FooterIconsContainer>
            <FooterIconsContainer>
                <img src={instagram_icon} alt="" />
            </FooterIconsContainer>
        </FooterSocials>
    </FooterContainer>
  )
}
