import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Roboto', sansz-serif;
  font-weight: 500;
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: rgba(255, 255, 0, 0.25);
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: rgba(255, 0, 255, 0.25);
  text-align: center;
`;

const Main = styled.main`
  width: 100%;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.25);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <StyledApp className='App'>
        <Header>
          <h2>Header</h2>
        </Header>
        <Main>
          <Wrapper>
            <h1>Main</h1>
          </Wrapper>
        </Main>
        <Footer>
          <h2>Footer</h2>
        </Footer>
      </StyledApp>
    </>
  );
};

export default App;
