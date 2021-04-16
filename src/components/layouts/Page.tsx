import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: linear-gradient( to left, #ffffff 50%, rgba(230, 237, 238, 0.377) 50%);
`

interface Properties {
  children: ReactNode
}

const Page: FC<Properties> = ({ children }) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

export default Page
