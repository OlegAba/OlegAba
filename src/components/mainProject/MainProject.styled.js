import styled from 'styled-components';

export const StyledMainProject = styled.div`  
  h1 {
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: -40px;
  }

  .image-container {
    padding-top: 80px;
    padding-bottom: 80px;

    img {
      display: block;
      width: 70%;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .image-grid {
    display: grid;
    margin-top: 4px;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  .image-grid-col {
    padding: 24px;
    cursor: pointer;
    
    img {
        display: block;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundActive};
    }
  }

  @media ${({ device }) => device.tablet} {
    .image-grid {
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media ${({ device }) => device.mobileL} {
    .image-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  .info-grid {
    margin-top: 4px;
    display: grid;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 0.5fr 1fr;
    grid-template-columns: 0.5fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  @media ${({ device }) => device.tablet} {
    .info-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }

  .info-grid-col {
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
    .info-grid-col {
      padding: 24px;
    }
  }

  ul {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin-top: 5px;
  }

  li {
    margin-bottom: 6px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    color: ${({ theme }) => theme.accent};

    span {
      color: ${({ theme }) => theme.body};
    }
  }

  .tech-container {
    margin-top: 20px;
  }

  .button-grid {
    height: 40px;
    display: flex;
    justify-content: space-around;
    padding: 0 5px 0 5px;

    a {
      transition: all .1s linear;
    }

    .linkButton {
      color: ${({ theme }) => theme.accent};
      background-color: ${({ theme }) => theme.secondaryAccent};
      text-decoration: none;
      padding: 10px;
      margin-left: 20px;
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      border-color: ${({ theme }) => theme.accent};
      transition: all .1s linear;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility:    hidden;
      -ms-backface-visibility:     hidden;

      &:hover {
        color: ${({ theme }) => theme.title};
        background-color: ${({ theme }) => theme.accent};
      }
    }
  }

  @media ${({ device }) => device.tablet} {
    .button-grid {
      margin-top: 40px;
      justify-content: center;
    }
  }

  @media ${({ device }) => device.mobileL} {
    .button-grid {
      height: auto;
      flex-direction: column;
      justify-items: center;
      margin-right: auto;
      margin-left: auto;
      margin-top: 40px;

      .linkButton {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 135px;
      }
    }
  }

`;