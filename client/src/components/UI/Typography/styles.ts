import styled, { css } from 'styled-components'
import { defaultTheme } from '@/styles/theme'

export type TextColors = keyof typeof defaultTheme.colors
export type TextVariants = 'title' | 'subtitle' | 'body1' | 'body2' | 'button'

type TextProps = {
  color: TextColors
  variant: TextVariants
}

const variantStyles = {
  title: css`
    font-size: 2rem;
  `,
  subtitle: css`
    font-size: 1.5rem;
  `,
  body1: css`
    font-size: 1rem;
  `,
  body2: css`
    font-size: 0.8rem;
  `,
  button: css`
    font-size: 1rem;
    text-transform: uppercase;
  `,
}

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.colors[props.color].main};
  ${(props) => variantStyles[props.variant]};
`
