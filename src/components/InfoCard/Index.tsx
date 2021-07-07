import React, { FC } from 'react'
import styled from 'styled-components'
import imgBreakfast from '../../images/breakfast4.jpg'

const Frame = styled.div`
  border: 1px solid #2b3a44;
  margin-top: 50px;
  padding: 18px;
`

const Card = styled.div`
  border: 1px solid #2b3a44;
  height: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 0 54px;
  height: 100%;
  width: 50%;
  min-width: 550px;

  p {
    font-size: 18px;
  }
`

const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
  transform: translate(100%, -100%);
  overflow: hidden;
`

const Photo = styled.img`
  height: 100%;
  width: 100%;
  position: relative;

  :hover {
	-webkit-transform: scale(1.2);
	transform: scale(1.2);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  }
`

const InfoCard: FC = () => {
  return (
    <Frame>
      <Card>
        <TextContainer>
          <h2>Corona Virus</h2>
          <p>At Barangay B&amp;B we constantly take the necessary precautions to keep our guests and staff in a safe environment. We strictly follow national health regulations and wearing a face mask is mandatory in the hotel.</p>
          <p>Furthermore we are happy to inform you that the stores and museums have reopened and that the restaurants are open until 22:00. Therefore you can now enjoy your dinner at a local restaurant or order in and have dinner in your room. We’ll make sure to set up a table for you in the room. Breakfast can be either enjoyed in our Garden or as a lovely breakfast in bed in your room.</p>
        </TextContainer>
        <ImgContainer>
          <Photo src={imgBreakfast} alt='breakfast image'/>
        </ImgContainer>
      </Card>
    </Frame>
  )
}
  
export default InfoCard
