import NavLinks from './NavLinks'
import Logo from './Logo'
import styled from '@emotion/styled'
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'
import ThemeModeSwitcher from './ThemeModeSwitcher'
import { useUntil } from '../../../../hooks/mediaQuery'
import Container from '../Container'

export const menus = [
  {
    id: 1,
    label: 'Artworks',
    path: '/'
  },
  {
    id: 2,
    label: 'Favorite ArtWorks',
    path: '/favorite-artworks'
  }
]

function NavMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isUntilSm = useUntil('sm')

  const filteredLinks = isUntilSm ? menus : menus.slice(1)

  return (
    <Container max-width='xl'>
      <Nav>
        <Logo />
        <NavLinks menus={filteredLinks} isOpen={isOpen} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <ThemeModeSwitcher isOpen={isOpen} />
      </Nav>
    </Container>
  )
}

export default NavMenu

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  margin: 1rem 2rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    justify-content: space-between;
  }
`
