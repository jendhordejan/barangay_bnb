import { FC } from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    margin-left: unset;
`

const List: FC = ({children}) => {
  return <StyledUl>{children}</StyledUl>
}

export default List
