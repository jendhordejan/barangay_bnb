import React from 'react';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Header from './components/Layouts/Header/Index';
import Home from './pages/home/Index';
import { SliderData } from './data/SliderData';
import { GlobalStyle } from './global/GlobalStyle'
import RowContainer from './components/Layouts/RowContainer/Index';
import InfoCard from './components/InfoCard/Index';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Home />
        <RowContainer>
          <InfoCard/>
        </RowContainer>
        <ImageSlider slides={SliderData}/>

      </div>
    </>
  );
}

export default App;
