import React from 'react';
import Navbar from './components/layouts/Navbar';
import Page from './components/layouts/Page';
import { GlobalStyle } from './global/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Page>
          
        </Page>
      </div>
    </>
  );
}

export default App;
