import styled from '@emotion/styled'
import Navlink from './Navlink'

interface Menus {
  id: number
  label: string
  path: string
}

function NavLinks({ menus, isOpen }: { menus: Menus[], isOpen: boolean }): JSX.Element {
  return (
    <MenuLinks className={isOpen ? 'open' : ''}>
      {menus.map(menu => <Navlink key={menu.id} {...menu} />)}
    </MenuLinks>
  )
}

export default NavLinks

const MenuLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 2rem;
  display: flex;
  position: initial;

  ${(props) => props.theme.breakpoints.down('sm')} {
    position: absolute;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: all .3s ease-in-out;
    padding-top: 40%;
  }

  &.open {
    left: 0;
    background-color: ${props => props.theme.palette.grey['900']};
    font-size: 1.3rem;
  }
`
