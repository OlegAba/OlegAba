import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 36px 0 36px 0;
  display: flex;
  width: 100%;

  .copyright-container {
    flex: 1;
    color: ${({ theme }) => theme.title};
    font-weight: 500;
  }

  .links-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .link a {
      margin-left: 30px;
      text-decoration: none;
      transition: color 0.1s linear;
      color: ${({ theme }) => theme.title};

      &:hover {
        color: ${({ theme }) => theme.accent};
      }
    }
  }

  @media ${({ device }) => device.tablet} {
    flex-direction: column-reverse;

    .copyright-container {
      text-align: center;
      margin-top: 20px;
    }

    .links-container {
      justify-content: center;

      .link a {
        margin-right: 30px;
      }
    }
  }
`;