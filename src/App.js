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
min-height: 100vh;
}

@media (max-width: 1024px) {
  body{
  height: min-content;
  background-image: url('./mobilebg.jpg');
  background-size: 100vmax;
  }
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: red;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`

export default App;
