import { ReactNode } from 'react'

import { Container, Card } from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Card>{children}</Card>
    </Container>
  )
}

export default Layout
