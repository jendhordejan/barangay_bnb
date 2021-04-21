import React, { FC } from 'react'
import styled from 'styled-components'
import { List, ListItem } from '../../Index'

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Navbar: FC = () => {
  const navLinks = [
    {
      name: 'Home',
      url: '#home'
    },
    {
      name: 'Room',
      url: '#room'
    },
    {
      name: 'Tips',
      url: '#tips'
    },
    {
      name: 'About',
      url: '#about'
    },
    {
      name: 'Contact',
      url: '#contact'
    },
  ]

  const totalLinks = navLinks.length -1

  return (
    <>
      <NavbarWrapper>
        <List>
          {navLinks.map((navItem, index) => {

            const {name, url} = navItem
            
            if (totalLinks === index) {
              return <ListItem hidebullet={true}><a href={url}>{name}</a></ListItem>
            }

            return <ListItem><a href={url}>{name}</a></ListItem>
          })}
        </List>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
