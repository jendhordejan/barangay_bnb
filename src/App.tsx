import React from 'react';
import styled from 'styled-components';
import { Button } from './components/Index';
import Header from './components/layouts/Header/Index';
import Navbar from './components/layouts/Navbar/Index';
import Page from './components/layouts/Page/Index';
import { bgImg, palette } from './global/constants/theme';
import { GlobalStyle } from './global/GlobalStyle'

const TestContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
  background-image: ${bgImg.primary};
`

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Page>
          <TestContainer>
            <Button direction={'left'} bgcolor={palette.secondary} bgcolortransition={palette.primary} fontcolor={palette.primary} fontcolorhover={palette.secondary}>Information</Button>
            <Button direction={'left'}>Book Now</Button>
          </TestContainer>
        </Page>
      </div>
    </>
  );
}

export default App;
