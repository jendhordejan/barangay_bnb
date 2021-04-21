import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface IStyledLi {
  fontSize: string
  mb: number
}
const StyledLi = styled.li<IStyledLi>`
  position: relative;
  padding: 0 2.5rem;
  margin-bottom: ${(p)=>p.mb && p.mb}px;

  font-size: ${(p)=>p.fontSize ? p.fontSize :  '16'}px;
  line-height: 24px;

  /** styling for diamond shape bullet */
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
    color: #2B3A44;
    text-align: center;
    
    text-decoration: none;
  }
`

const NoBulletLi = styled.li<IStyledLi>`
  position: relative;
  padding: 0 2.5rem;
  margin-bottom: ${(p)=>p.mb && p.mb}px;

  font-size: ${(p)=>p.fontSize ? p.fontSize :  '16px'};
  line-height: 24px;

  a {
    color: #2B3A44;
    text-align: center;
    
    text-decoration: none;
  }
`

interface IListItem extends InputHTMLAttributes<HTMLLIElement> {
  fontSize?: string
  mb?: number
  hidebullet?: boolean
}
const ListItem: FC<IListItem> = ({children, fontSize='16px', mb=0, hidebullet=false, ...props}) => {
 return hidebullet ? <NoBulletLi fontSize={fontSize} mb={mb} {...props}>{children}</NoBulletLi> :  <StyledLi fontSize={fontSize} mb={mb} {...props}>{children}</StyledLi>
}

export default ListItem
