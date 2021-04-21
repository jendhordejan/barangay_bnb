import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { List, ListItem } from './Index';
import mainImage from "../images/main.jpg";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import Icon from './Icon';
import { palette } from '../global/constants/theme';

const BannerImageWrapper = styled.div`
    height: calc(100vh - 160px);
    min-height: 288px;
    margin-top: 30px;
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

const BannerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const IconWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  width: 40%;
`

const Banner: FC = () => {
  const [hotelInfo] = useState({
    phone: '+31 (0) 625 045 432',
    email: 'rooms@barangay.nl'
  })

  const {phone, email} = hotelInfo
  return (
    <div>
      <BannerImageWrapper>
        <img src={mainImage} alt='mainImage' />
      </BannerImageWrapper>
      <BannerBottom>
        <div>
          <List>
            <ListItem fontSize={'14'}>`Telephone: {phone}`</ListItem>
            <ListItem fontSize={'14'} hidebullet={true}>`Email: {email}`</ListItem>
          </List>
        </div>
        <IconWrapper>
          <a target='_blank' rel='noopener' href='https://www.facebook.com/tropicalrooms/'>
            <Icon fontSize={24} color={palette.primary} icon={faFacebook}/>
          </a>
        </IconWrapper>
      </BannerBottom>
    </div>
  )
}

export default Banner
