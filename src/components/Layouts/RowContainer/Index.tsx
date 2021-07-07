import React, { FC } from 'react'
import { Children } from 'react'
import styled from 'styled-components'

const Row = styled.div`
  height: 600px;
  display: flex;
  padding: 0 60px;
`

const RowContainer: FC = ({ children }) => {
  return <Row>{children}</Row>
}

export default RowContainer
