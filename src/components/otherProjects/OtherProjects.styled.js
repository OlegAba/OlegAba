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

    .projects-grid-col {
      padding: 20px 20px 0 20px;

      h4 {
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
      }

      img {
          padding: 20px 20px 0 20px;
          display: block;
          width: 100%;
          margin-right: auto;
          margin-left: auto;
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