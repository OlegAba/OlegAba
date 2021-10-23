import styled from 'styled-components';

export const StyledMainProject = styled.div`
  .image-container img {
    width: 70%;
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

    p {
      padding-bottom: 20px;
    }
  }

  @media ${({ device }) => device.tablet} {
    .info-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;

      p {
        padding-bottom: 0;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .button-grid {
    display: flex;
    justify-content: space-around;

    a {
      transition: all .1s linear;
    }

    .link-button {
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
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;

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

  @media ${({ device }) => device.mobileM} {
    .button-grid {
      height: auto;
      flex-direction: column;
      justify-items: center;
      margin-right: auto;
      margin-left: auto;
      margin-top: 40px;

      .link-button {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 135px;
      }
    }
  }

`;