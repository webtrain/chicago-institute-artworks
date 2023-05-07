import React from 'react'
import useThemeMode, { type ThemeModeReturnType } from '../../../hooks/useThemeMode'

export const ThemeModeContext = React.createContext<ThemeModeReturnType | null>(null)

function ThemeModeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const themeMode = useThemeMode()

  return (
    <ThemeModeContext.Provider value={{ ...themeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider

export const useTheme = (): any => {
  const context = React.useContext(ThemeModeContext)

  if (context === undefined) {
    throw new Error(
      '\'useTheme\' must be used within \'ThemeModeProvider\''
    )
  }

  return context
}
