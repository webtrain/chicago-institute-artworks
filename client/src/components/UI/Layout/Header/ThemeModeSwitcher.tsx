import styled from '@emotion/styled'
import React from 'react'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useTheme } from '../../../../lib/styles/Theme/ThemeContext'

function ThemeModeSwitcher({ isOpen }: { isOpen: boolean }): JSX.Element {
  const { theme, mode, toggleColorMode } = useTheme()

  return (
    <Button
      isOpen={isOpen}
      onClick={() => {
        toggleColorMode()
      }}
    >
      {mode === 'dark'
        ? <WbSunnyOutlinedIcon htmlColor={theme.palette.text.primary} />
        : <DarkModeOutlinedIcon htmlColor={theme.palette.text.primary} />}
    </Button>
  )
}

export default ThemeModeSwitcher

const Button = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  outline: none;
  margin-left: auto;
  cursor: pointer;
  transition: opacity 0.3s ease;

  ${(props) => props.theme.breakpoints.down('sm')} {
    position: absolute;
    right: 6rem;
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
  }
`
