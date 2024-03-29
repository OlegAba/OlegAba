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
    transition: background 0.2s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.title};
  }

  h1 {
    font-size: 40px;
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: -20px;
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  @media ${({ device }) => device.tablet} {
    h1 {
      margin-bottom: -12.5px;
      font-size: 25px;
    }
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

  ul {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
    margin-top: 5px;
    line-height: 1.5;

    li {
      font-size: 16px;
      margin-bottom: 6px;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 12px;
      color: ${({ theme }) => theme.accent};

      span {
        color: ${({ theme }) => theme.body};
      }
    }
  }

  .max-width-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 0 24px;
  }

  .section-container {
    padding-top: 80px;
    padding-bottom: 36px;
  }

  .projects-container {
    margin-top: 80px;
  }

  .footer-container {
    margin-top: 80px;
  }

  .box-section {
    background-color: ${({ theme }) => theme.secondaryBackground};
    border-radius: 2px;
  }

  .image-container {
    padding-top: 80px;
    padding-bottom: 80px;

    img {
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .grid-column {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 48px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media ${({ device }) => device.mobileL} {
    .grid-column {
      padding: 24px;
    }

    .max-width-container {
      padding: 0 12px 0 12px;
    }
  }
`;