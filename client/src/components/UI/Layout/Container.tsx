import { Container as MuiContainer, type ContainerProps as MuiContainerProps } from '@mui/material'
import React from 'react'

export interface ContainerProps extends MuiContainerProps {}

const Container: React.FC<ContainerProps> = props => {
  return <MuiContainer {...props} />
}

export default Container
