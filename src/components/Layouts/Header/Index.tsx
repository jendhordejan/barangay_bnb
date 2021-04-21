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
`

const ButtonWrapper = styled.div`
  width: 180px;
  padding: 4px;
  border: 1px solid;
`

const Header: FC = () => {
  return (
    <Main>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <ButtonWrapper>
        <Button direction={'right'}>Book Now</Button>
      </ButtonWrapper>
    </Main>
  )
}

export default Header
