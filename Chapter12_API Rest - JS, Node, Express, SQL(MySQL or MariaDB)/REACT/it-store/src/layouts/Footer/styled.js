import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff; 
  padding: 70px;
`;

export const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
        width: 50px; 
        height: auto; 
        margin-right: 10px;
    }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const FooterLink = styled.li`
  margin-right: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
`;

export const FooterIconsContainer = styled.div`
  margin-right: 10px;
  cursor: pointer; 
  img {
    width: 30px; 
    height: auto; /
  }
`;
