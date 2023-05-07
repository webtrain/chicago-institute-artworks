import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

function Logo(): JSX.Element {
  return (
    <NavLogo
      to='/'
    >
      ARTWORKS
    </NavLogo>
  )
}

export default Logo

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 5px;
`
