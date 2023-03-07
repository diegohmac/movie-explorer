import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  width: 80vw;
  height: 80vh;
  box-shadow: rgba(47, 60, 126, 0.3) 0px 30px 40px;
  background-color: ${(props) => props.theme.colors.secondary.main};

  border-radius: 8px;
  padding: 56px 56px 0px 56px;

  display: flex;
  flex-direction: column;

  ${(props) => css`
    @media ${props.theme.breakpoints.sm} {
      width: 100vw;
      height: 100vh;
      border-radius: 0px;
      padding: 24px 16px;
      outline: 2px solid red;
    }
  `}
`
