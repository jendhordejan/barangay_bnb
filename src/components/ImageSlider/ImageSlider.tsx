import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { ISliderData } from '../../data/SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft ,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Slider = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
`

const LeftArrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const RightArrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const ActiveSlide = styled.div`
  max-width: 800px;
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
`

const Slide = styled.div`
  opacity: 0.5;
  transition-duration: 2s ease;
`

interface Properties {
  slides: ISliderData[]
}

const ImageSlider: FC<Properties> = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = slides.length

  const showNextSlide = () => {
    /** if the currentIndex is the last image then set currentIndex to point to the first image otherwise set currentIndex as the index of the next image  */
    setCurrentIndex(currentIndex === length-1 ? 0 : currentIndex + 1)
  }

  const showPrevSlide = () => {
    /** if the currentIndex is the first image then set the currentIndex to point to the last image otherwise set currentIndex as the index of the previous image */
    setCurrentIndex(currentIndex === 0 ? length-1 : currentIndex - 1)
  }

  if(!Array.isArray(slides) || slides.length <=0) {
    return null
  }

  return (
    <Slider>
      <LeftArrow icon={faChevronLeft} onClick={showPrevSlide} />
      <RightArrow icon={faChevronRight} onClick={showNextSlide} />
      {slides.map((slide, index)=> {
        return (
          (index === currentIndex) ? (
            <ActiveSlide key={index}>
              {index === currentIndex && <Image src={slide.image} alt='active image' key={index}/>}
            </ActiveSlide>
          ) : (
            /** in the future: it would be nice to show the previous and next photo using this slide component */
            <Slide key={index}>
              {index === currentIndex && <Image src={slide.image} alt='inactive image' key={index-1}/>}
            </Slide>
          )
        )
      })}
    </Slider>
  )
}

export default ImageSlider
