import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  padding: 20px 0 20px 0;

  .navbar-container {
    display: flex;
    height: 26px;

    .nav-logo {
      flex: 1;
      min-width: 0;

      img {
        height: 100%;
      }
    }

    .nav-links {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin: 0 20px;
        text-decoration: none;
        color: ${({ theme }) => theme.button};

        &:hover {
          color: ${({ theme }) => theme.buttonHover};
        }
      }
    }

    .nav-toggle {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .nav-menu {
      height: 100%;
      color: ${({ theme }) => theme.title};
    }
  }
`;