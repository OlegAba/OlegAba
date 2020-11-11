import styled from 'styled-components';

export const StyledAbout = styled.div`
  h1 {
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: -40px;
  }

  @media ${({ device }) => device.tablet} {
    h1 {
      margin-bottom: -25px;
    }
  }

  .image-container {
    padding-top: 80px;
    padding-bottom: 80px;

    img {
      padding-left: 40px;
      padding-right: 40px;
      display: block;
      max-width: 100%;
      width: 400px;
      margin-right: auto;
      margin-left: auto;
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
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
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
`;