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
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-weight: 500;
}

body {
background-image: url('./backgroundImg.jpg');
background-size: cover ;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}
`

export default App;
