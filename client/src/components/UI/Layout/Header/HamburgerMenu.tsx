import type { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'

interface HamburgerMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function HamburgerMenu({ isOpen, setIsOpen }: HamburgerMenuProps): JSX.Element {
  return (
    <HamburgerIcon
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      {isOpen
        ? <MenuOpenRoundedIcon fontSize='large' />
        : <MenuRoundedIcon fontSize='large' />}
    </HamburgerIcon>
  )
}

export default HamburgerMenu

const HamburgerIcon = styled.span`
  display: none;
  z-index: 99;
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: inline-block;
  }
`
