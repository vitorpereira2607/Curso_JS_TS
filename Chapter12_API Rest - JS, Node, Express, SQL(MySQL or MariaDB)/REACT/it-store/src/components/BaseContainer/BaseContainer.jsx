import React from 'react'
import { Container } from './styled'
export const BaseContainer = ({children, className, props}) => {
  return (
    <Container className={className} {...props}>
        {children}
    </Container>  
  )
}
