import React from 'react';
import Header from './components/layouts/Header/Index';
import { List, ListItem } from './components/layouts/Index';
import Navbar from './components/layouts/Navbar/Index';
import Page from './components/layouts/Page/Index';
import { GlobalStyle } from './global/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Page>
          <List>
            <ListItem fontSize={'30px'}>In-room secured Wi-Fi</ListItem>
            <ListItem fontSize={'30px'}>Nespresso Coffee</ListItem>
            <ListItem fontSize={'30px'}>Nilson Beds</ListItem>
            <ListItem fontSize={'30px'}>Bathrobe and Slippers</ListItem>
            <ListItem fontSize={'30px'}>Complimentary Still and Sparkling Water</ListItem>
            <ListItem fontSize={'30px'}>Complimentary Breakfast</ListItem>
          </List>            
        </Page>
      </div>
    </>
  );
}

export default App;
