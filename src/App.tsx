import React from 'react';
import Header from './components/layouts/Header/Index';
import Navbar from './components/layouts/Navbar/Index';
import { GlobalStyle } from './global/GlobalStyle'
import Home from './pages/home/Index';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Home />
      </div>
    </>
  );
}

export default App;
