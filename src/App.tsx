import React from 'react';
import Header from './components/layouts/Header/Index';
import Navbar from './components/layouts/Navbar/Index';
import Page from './components/layouts/Page/Index';
import { GlobalStyle } from './global/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Page>
          This is the page
        </Page>
      </div>
    </>
  );
}

export default App;
