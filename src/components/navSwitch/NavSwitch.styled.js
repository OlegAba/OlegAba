import styled from 'styled-components';

export const StyledNavSwitch = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    display: grid;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    height: 26px;
    width: 26px;
    z-index: 1;
  }

  .icon {
    grid-column: 1;
    grid-row: 1;
    color: ${({ theme }) => theme.title};
    z-index: 3;
    background-color: ${({ theme }) => theme.background};
    width: 35px;
    height: 35px;
    padding: 8px;
    border-color: ${({ theme }) => theme.secondaryAccent};
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }

  .sun {
    border-color: ${({ theme }) => theme.secondaryAccent};
    background-color: ${({ theme }) => theme.backgroundActive}
  }

  .moon {
    border-color: ${({ theme }) => theme.backgroundActive};
    color: ${({ theme }) => theme.accent};
  }

  .ball {
    background-color: ${({ theme }) => theme.secondaryBackground};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    z-index: 2;
  }

`;