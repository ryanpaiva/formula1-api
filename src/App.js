import { createGlobalStyle } from 'styled-components';
import { AppRouter } from './components/pages/routes.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;   
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-weight: 500;
}
`

export default App;
