import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { GlobalStyles } from './GlobalStyles'
import { useTheme } from './ThemeContext'

interface ThemeProvidersProps {
  children: React.ReactNode
}

function ThemeProviders({ children }: ThemeProvidersProps): JSX.Element {
  const { theme } = useTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProviders
