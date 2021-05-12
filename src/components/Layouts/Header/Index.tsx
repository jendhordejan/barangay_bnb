import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../Index'
import Navbar from '../Navbar/Index'

const Main = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  max-height: 65px;
`

const HeaderWrapper = styled.div`
  top: 0;
  left: 0;

  height: 65px;
  width: calc(100% - 80px);
  padding-left: 16px;

  border-bottom: solid 1px #2B3A44;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: unset;
  }
`

const ButtonWrapper = styled.div`
  width: 180px;
  padding: 4px;
  border: 1px solid;
`

const Header: FC = () => {
  const bookingLink = 'https://reservations.cubilis.eu/bbbarangay-amsterdam?Language=en-GB'
  
  return (
    <Main>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <ButtonWrapper>
        <Button direction={'right'} onClick={()=>{window.location.replace(bookingLink)}}>Book Now</Button>
      </ButtonWrapper>
    </Main>
  )
}

export default Header
