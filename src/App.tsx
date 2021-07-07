import React from 'react';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Header from './components/Layouts/Header/Index';
import Home from './pages/home/Index';
import { SliderData } from './data/SliderData';
import { GlobalStyle } from './global/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Home />
        <ImageSlider slides={SliderData}/>
      </div>
    </>
  );
}

export default App;
