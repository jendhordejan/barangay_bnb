import React, { FC } from 'react'
import styled from 'styled-components';
import { Page } from '../../components/Layouts/Index'
import Banner from './Banner';


const Home: FC = () => {
  return (
    <Page>
      <Banner />
    </Page>
  )
}

export default Home
