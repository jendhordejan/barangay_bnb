import React, { FC } from 'react'
import styled from 'styled-components'
import { List, ListItem } from '../../Index'

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
