import { FC } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 70px;
  width: 100%;
  padding-left: 16px;

  border-bottom: solid 1px #2B3A44;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header: FC = ({children}) => {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  )
}

export default Header
