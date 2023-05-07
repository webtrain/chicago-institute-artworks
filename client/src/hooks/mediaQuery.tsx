import { type Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const useUntil = (width: Breakpoint): boolean => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down(width))
}
