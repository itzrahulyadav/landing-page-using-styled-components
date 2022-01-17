import { ThemeProvider } from 'styled-components';
import { Container } from './Components/Styles/Container.styled';
import Header from './Components/Header'
import GlobalStyles from './Components/Styles/Globals';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  },
  mobile: '768px'

}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
