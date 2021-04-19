import React, { FC } from 'react'
import styled from 'styled-components';
import mainImage from "../../images/main.jpg";

const BannerWrapper = styled.div`
    height: calc(100vh - 160px);
    min-height: 288px;
    margin: 30px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;

    img {
      max-height: calc(100vh - 160px);
      width: 100%;
    }

    :before, :after{
      content: "";
      position: absolute;
      top: 24px;
      right: 24px;
      left: 24px;
      bottom: 24px;
      background: transparent;
      border: solid 1px #fff;
      z-index: 3;
    }

    :after{
      top: 48px;
      left: 48px;
      right: 48px;
      bottom: 48px;
    }
`

const Banner: FC = () => {
  return (
    <BannerWrapper>
      <img src={mainImage} alt='mainImage' />
    </BannerWrapper>
  )
}

export default Banner
