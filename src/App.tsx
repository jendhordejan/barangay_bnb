import styled from 'styled-components';
import Header from './components/layouts/Header/Index';
import Navbar from './components/layouts/Navbar/Index';
import Page from './components/layouts/Page/Index';
import { GlobalStyle } from './global/GlobalStyle'

const TestContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  background-image: linear-gradient(-25deg, #616161 0%, #96B7C4 100%);
`

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Page>
          <TestContainer>

          </TestContainer>
        </Page>
      </div>
    </>
  );
}

export default App;
