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
* {
  margin: 0;
  padding: 0;   
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-weight: 500;
}

body {
background-image: url('./backgroundImg.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
}

@media (max-width: 1050px) {
  body{
  height: min-content;
  background-image: url('./mobilebg.jpg');
  }
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}
`

export default App;
