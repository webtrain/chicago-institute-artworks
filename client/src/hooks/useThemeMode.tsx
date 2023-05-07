import React from 'react'
import { createTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

interface CustomPalletes {
  headerBg: React.CSSProperties['color']
  footerBg: React.CSSProperties['color']
  favButton: React.CSSProperties['color']
}

declare module '@mui/material' {
  interface PaletteOptions extends CustomPalletes {}

  interface Palette extends CustomPalletes {}
}

export interface ThemeModeReturnType {
  theme: Theme
  mode: 'light' | 'dark'
  toggleColorMode: VoidFunction
}

function useThemeMode(): ThemeModeReturnType {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')

  function toggleColorMode(): void {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const lightTheme = {
    palette: {
      mode,
      primary: {
        main: '#69aac6'
      },
      secondary: {
        main: '#a39752'
      },
      background: {
        default: '#fff'
      },
      headerBg: '#1889ba',
      footerBg: '#F8F5E4',
      favButton: '#FFC000'
    }
  }

  const darkTheme = {
    palette: {
      mode,
      primary: {
        main: '#064663'
      },
      secondary: {
        main: '#564b06'
      },
      background: {
        default: '#041C32'
      },
      headerBg: '#04293A',
      footerBg: '#F8F5E4',
      favButton: '#FFC000'
    }
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        ...(mode === 'light'
          ? { ...lightTheme }
          : { ...darkTheme })
      }),
    [mode]
  )

  return { theme, mode, toggleColorMode }
}

export default useThemeMode
