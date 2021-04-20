import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { List, ListItem } from '../../components/Index';
import mainImage from "../../images/main.jpg";

const BannerWrapper = styled.div`
    height: calc(100vh - 160px);
    min-height: 288px;
    margin-top: 30px;
    margin-bottom: 0;
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

const ContactInfo = styled.div`

`

const Banner: FC = () => {
  const [hotelInfo] = useState({
    phone: '+31 (0) 625 045 432',
    email: 'rooms@barangay.nl'
  })

  const {phone, email} = hotelInfo
  return (
    <div>
      <BannerWrapper>
        <img src={mainImage} alt='mainImage' />
      </BannerWrapper>
      <div>
        <div>
          <List>
            <ListItem><strong>T:</strong>{phone}</ListItem>
            <ListItem><strong>E:</strong>{email}</ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}

export default Banner
