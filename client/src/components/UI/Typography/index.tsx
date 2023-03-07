import { ReactNode } from 'react'

import { Text, TextColors, TextVariants } from './styles'

type TypographyProps = {
  children: ReactNode
  color?: TextColors
  variant?: TextVariants
  className?: string
}

const Typography = ({
  children,
  color = 'neutral',
  variant = 'body1',
  className,
}: TypographyProps) => {
  return (
    <Text className={className} color={color} variant={variant}>
      {children}
    </Text>
  )
}

export default Typography
