import { FC } from 'react'
import styled from 'styled-components'

const StyledLI = styled.li`
  position: relative;
  padding: 0 24px;

  ::before { 
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

  a {
    font-size: 16px;
    line-height: 24px;
    color: #2B3A44;
    text-align: center;
    
    text-decoration: none;
  }
`

const ListItem: FC = ({children}) => {
  return <StyledLI>{children}</StyledLI>
}

export default ListItem
