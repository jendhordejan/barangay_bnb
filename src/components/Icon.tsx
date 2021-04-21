import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { palette } from '../global/constants/theme'

interface IIcon {
  fontSize?: number
  color: string
  icon: IconDefinition
}

const StyledIcon = styled(FontAwesomeIcon)<IIcon>`
  color: ${(p) => p.color};

  ${(p) =>
    p.fontSize &&
    `
  font-size: ${p.fontSize}px;
  `}
`
export interface Properties {
  icon: IconDefinition
  fontSize?: number
  color?: string
}

const Icon: FC<Properties> = ({ fontSize, color = palette.primary, icon }) => {
  return <StyledIcon icon={icon} fontSize={fontSize} color={color} />
}

export default Icon
