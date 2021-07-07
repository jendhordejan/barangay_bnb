import slide1 from '../images/room1_main.jpeg'
import slide2 from '../images/room1_1.jpeg'
import slide3 from '../images/room1_2.jpeg' 
import slide4 from '../images/room1_3.jpeg'
import slide5 from '../images/room2_main.jpg'
import slide6 from '../images/room2_2.jpg'
import slide7 from '../images/room2_3.jpg'
import slide8 from '../images/room2_4.jpg'
import slide9 from '../images/room2_4.jpg'

export const SliderData = [
  {
    description: 'slide1',
    image: slide1
  },
  {
    description: 'slide2',
    image: slide2
  },  
  {
    description: 'slide3',
    image: slide3
  },  
  {
    description: 'slide4',
    image: slide4
  },  
  {
    description: 'slide5',
    image: slide5
  },  
  {
    description: 'slide6',
    image: slide6
  },
  {
    description: 'slide7',
    image: slide7
  },    
  {
    description: 'slide8',
    image: slide8
  },    
  {
    description: 'slide9',
    image: slide9
  },  
]

export interface ISliderData {
  description: string
  image: string
}
