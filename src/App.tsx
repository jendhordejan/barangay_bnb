import React from 'react';
import Header from './components/Layouts/Header/Index';
import { GlobalStyle } from './global/GlobalStyle'
import Home from './pages/home/Index';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        Slider
        {/* <Header />
        <Home /> */}
      </div>
    </>
  );
}

export default App;
