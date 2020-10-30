import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    //overflow-x: hidden;
    transition: background 0.2s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.title};
  }

  h1 {
    font-size: 62px;
  }

  h2 {
    font-size: 42px;
  }

  h4 {
    font-size: 18px;
    padding-tip: 10px;
    padding-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  .max-width-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 0 24px;
  }

  .main-container {
    padding-top: 80px;
    padding-bottom: 36px;
  }

  .box-section {
    background-color: ${({ theme }) => theme.secondaryBackground};
    border-radius: 2px;
  }
`;