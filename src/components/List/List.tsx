import { FC } from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    padding-left: unset;
`

const List: FC = ({children}) => {
  return <StyledUl>{children}</StyledUl>
}

export default List
