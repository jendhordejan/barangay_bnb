import { FC } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 70px;
  width: 100%;
  padding-left: 16px;

  border-bottom: solid 1px #2B3A44;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* height: 80px;
  background: solid;

  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.175); */
`

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      Home
      Rooms
      Good to Know
      Contact
    </StyledNavbar>
  )
}

export default Navbar
