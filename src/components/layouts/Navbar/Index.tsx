import { FC } from 'react'
import styled from 'styled-components'

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
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#room">Room</a></li>
        <li><a href="#tips">Good to Know</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar
