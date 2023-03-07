import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  margin-bottom: 24px;

  ${(props) => css`
    @media ${props.theme.breakpoints.sm} {
      flex-direction: column;
      align-items: center;
    }
  `}

  div.searchBox {
    display: flex;
    align-items: stretch;
    justify-content: center;

    input {
      border-radius: 8px;
      padding: 16px 32px;
      outline: ${(props) => '2px solid transparent'};
      border: ${(props) => `2px solid ${props.theme.colors.secondary.dark}`};
      width: 100%;

      &:focus {
        outline: ${(props) => `2px solid ${props.theme.colors.secondary.dark}`};
      }
    }

    button {
      cursor: pointer;
      margin-left: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 4px;
      background-color: transparent;

      svg {
        color: ${(props) => props.theme.colors.secondary.dark};
      }
    }
  }
`
export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary.dark};

    &.active {
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }
`

export const QuerySubtitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto 8px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary.dark};
    margin-left: 8px;
  }
`
