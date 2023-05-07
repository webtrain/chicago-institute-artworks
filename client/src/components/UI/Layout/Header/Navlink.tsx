import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  id: number
  path: string
  label: string
}

function NavMenuLink({ label, path }: LinkProps): JSX.Element {
  return (
    <Link
      to={path}
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      {label}
    </Link>
  )
}

export default NavMenuLink

const Link = styled(NavLink)`
  padding: 0.5rem 1rem;

  &.active {
    background: ${props => props.theme.palette.primary.main};
    border-radius: 5px;
  }
`
