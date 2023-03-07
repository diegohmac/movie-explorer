import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: max-content;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const MovieCard = styled.div`
  position: relative;
  transition: all 0.4s ease;
  border-radius: 8px;
  width: 100%;
  height: 100%;

  & .year {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px;
    transition: opacity 0.2s ease;
  }

  &:has(section:hover) .year {
    opacity: 0.2;
  }

  section {
    padding: 48px 16px 16px 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    border-radius: 0px 0px 8px 8px;

    background: ${(props) =>
      `linear-gradient(to bottom, transparent 0%, ${props.theme.colors.primary.dark} 100%)`};

    div.extra {
      display: none;
    }

    &:hover {
      padding: 24px 16px;
      background: ${(props) =>
        `linear-gradient(to bottom, transparent 0%, ${props.theme.colors.primary.dark} 50%)`};
      height: 100%;
      div.extra {
        margin-top: 8px;
        display: block;
      }
    }
  }

  img {
    width: 100%;
    height: 224px;
    border-radius: 8px;
    object-fit: cover;
  }
`

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const SkeletonCard = styled.div`
  width: 100%;
  height: 228px;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`
