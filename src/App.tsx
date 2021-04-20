import React from 'react';
import Header from './components/Layouts/Header/Index';
import Navbar from './components/Layouts/Navbar/Index';
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
