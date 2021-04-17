import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

interface ISlideButton {
  direction: string
}
const SlideButton = styled.button<ISlideButton>`
  background-color: var(--background-color);
  font-family: 'Antic Didone', serif;
  font-size: 20px;
  color: white;
  padding: 14px 18px;
  border: solid 1px;
  outline: none;
  position: relative;
  cursor: pointer;

  --background-color: #2b3a44;
  --accent-color: white;

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
    color: #2b3a44;
  } 
`

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: string
}

const Button: FC<IButton>= ({children, direction = 'left'}) => {

  console.log(direction)
  return (
    <SlideButton direction={direction}>
      {children}
    </SlideButton>
  )
}

export default Button
