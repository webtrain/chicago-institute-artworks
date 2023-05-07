import React from 'react'
import styled from '@emotion/styled'
import NavMenu from './NavMenu'

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <NavMenu />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${props => props.theme.palette.headerBg};
`
