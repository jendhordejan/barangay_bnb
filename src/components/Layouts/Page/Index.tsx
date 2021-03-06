import { FC } from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 70px 30px 0;
  background: linear-gradient( to left, #ffffff 50%, rgba(230, 237, 238, 0.377) 50%);

  @media only screen and (max-width: 600px) {
    padding: 40px 0;
  }
`

const Page: FC = ({ children }) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

export default Page
