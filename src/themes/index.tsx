
import * as React from 'react'
import type { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import Theme from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import { createShadow } from './shadows'
import ComponentsOverrides from './overide'

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string
    200?: string
    darker: string
  }
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeOptions: ThemeOptions = {
    palette: Theme(),
    typography,
    shape: { borderRadius: 8 },
    breakpoints,
    direction: 'ltr',
    shadows: createShadow('#fbfbfb')
  }

  const theme: MuiTheme = createTheme(themeOptions)
  theme.components = ComponentsOverrides(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
