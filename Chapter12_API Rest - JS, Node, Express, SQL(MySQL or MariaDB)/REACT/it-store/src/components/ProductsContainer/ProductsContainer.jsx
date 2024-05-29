import React from 'react'
import { Container } from './styled'

export const ProductsContainer = ({children, className, props}) => {
  return (
    <Container className={className} {...props}>
        {children}
    </Container>
  )
}
