import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'
import { font } from '../../global/constants/theme'

interface ISlideButton {
  direction: string
  bgcolor: string
  bgcolortransition: string
  fontcolor: string
  fontcolorhover: string
}
const SlideButton = styled.button<ISlideButton>`
  background-color: var(--background-color);
  font-family: ${font.family.primary};
  font-size: 20px;
  color: ${(p)=>p.fontcolor};
  padding: 14px 18px;
  width: 100%;
  border: solid 1px;
  outline: none;
  position: relative;
  cursor: pointer;

  --background-color: ${(p)=>p.bgcolor};
  --accent-color: ${(p)=>p.bgcolortransition};

  ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: var(--accent-color);

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: ${(p) => p.direction};
  }

  :hover::before,
  :focus::before {
    transform: scaleX(1);
  }

  transition: transform 300ms ease-in-out;
  z-index: 1;

  :hover, :focus {
    color: ${(p)=>p.fontcolorhover};
  } 
`

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'center' | 'right' | 'left'
  bgcolor?: string
  bgcolortransition?: string
  fontcolor?: string
  fontcolorhover?: string
}

const Button: FC<IButton>= ({children, direction = 'left', bgcolor = '#2b3a44', bgcolortransition='white', fontcolor= 'white', fontcolorhover='#2b3a44' }) => {

  return (
    <SlideButton direction={direction} bgcolor={bgcolor} bgcolortransition={bgcolortransition} fontcolor={fontcolor} fontcolorhover={fontcolorhover}>
      {children}
    </SlideButton>
  )
}


export default Button
