import React, { FC } from 'react'
import styled from 'styled-components'
import { List, ListItem} from '../Index'

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  

  ul {
    list-style: none;
    display: flex;
  }
  
  li {
    position: relative;
    padding: 0 24px;
  }

  /** diamond shape */
  li::before { 
    width: 6px;
    height: 6px;
    position: absolute;
    right: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #E7E3E3;
    display: block !important;
    content: "";
    top: 8px;
  }
  

  li a {
    font-size: 16px;
    line-height: 24px;
    color: #2B3A44;
    text-align: center;
    
    text-decoration: none;
  }
`

const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <List>
        <ListItem><a href="#home">Home</a></ListItem>
        <ListItem><a href="#room">Room</a></ListItem>
        <ListItem><a href="#tips">Good to Know</a></ListItem>
        <ListItem><a href="#about">About</a></ListItem>
        <ListItem><a href="#contact">Contact</a></ListItem>
      </List>
    </NavbarWrapper>
  )
}

export default Navbar
