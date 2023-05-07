import { css, Global, type SerializedStyles } from '@emotion/react'
import { type Theme } from '@mui/material'

export const GlobalStyles = (): JSX.Element => {
  return <Global styles={(theme) => globalStyle(theme)} />
}

const globalStyle = (theme: Theme): SerializedStyles => css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
  }
  html,
  body {
    height: 100%;
  }

  a {
    color: ${theme.palette.text.primary};
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    color: ${theme.palette.text.primary};
  }

  body {
    background-color: ${theme.palette.background.paper}
    color: ${theme.palette.text.secondary}
  }

  :root {
    color-scheme: dark;
  }
`
