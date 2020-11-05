import styled from 'styled-components';

export const StyledOtherProjects = styled.div`  
  .projects-grid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;

    a, a:hover, a:active, a:visited, a:focus {
      text-decoration:none;
    }

    .projects-grid-col {
      padding-top: 20px;
      position: relative;
      overflow: hidden;

      &:hover {
        background-color: ${({ theme }) => theme.backgroundActive};
      }

      h4 {
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
      }

      .image-container {
        padding: 20px 40px 0 40px;
        margin-right: auto;
        margin-left: auto;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }

  @media ${({ device }) => device.tablet} {
    .projects-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${({ device }) => device.mobileL} {
    .projects-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }
`;