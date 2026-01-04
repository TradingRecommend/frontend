import type { Color, PaletteMode } from '@mui/material'
import type { PaletteColor, PaletteOptions } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'
import { green, red, amber, grey as greyColor, cyan, blue } from '@mui/material/colors'

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (): PaletteOptions => {
  const mode: PaletteMode = 'light'
  const contrastText: string = '#fff'

  const grey: Color = {
    50: greyColor[50],
    100: greyColor[100],
    200: greyColor[200],
    300: greyColor[300],
    400: greyColor[400],
    500: greyColor[500],
    600: greyColor[600],
    700: greyColor[700],
    800: greyColor[800],
    900: greyColor[900],
    A100: alpha(greyColor[500], 0.12),
    A200: alpha(greyColor[500], 0.16),
    A400: alpha(greyColor[500], 0.24),
    A700: alpha(greyColor[500], 0.32)
  }

  const primary: PaletteColor = {
    lighter: blue[50],
    200: blue[200],
    light: blue[400],
    main: blue[600],
    dark: blue[800],
    darker: blue[900],
    contrastText
  }

  const secondary: PaletteColor = {
    lighter: cyan[50],
    200: cyan[200],
    light: cyan[400],
    main: cyan[600],
    dark: cyan[800],
    darker: cyan[900],
    contrastText
  }

  const error: PaletteColor = {
    lighter: red[100],
    light: red[200],
    main: red[400],
    dark: red[700],
    darker: red[900],
    contrastText
  }

  const warning: PaletteColor = {
    lighter: amber[50],
    light: amber[300],
    main: amber[500],
    dark: amber[700],
    darker: amber[900],
    contrastText
  }

  const info: PaletteColor = {
    lighter: cyan[50],
    light: cyan[300],
    main: cyan[500],
    dark: cyan[700],
    darker: cyan[900],
    contrastText
  }

  const success: PaletteColor = {
    lighter: green[50],
    light: green[300],
    main: green[500],
    dark: green[700],
    darker: green[900],
    contrastText
  }

  return {
    mode,
    common: { black: '#000', white: '#fff' },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    grey,
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500]
    },
    divider: grey.A400,
    action: {
      active: grey[600],
      hover: grey[100],
      selected: grey[200],
      disabled: grey[600],
      disabledBackground: grey.A400,
      focus: grey.A400,
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
      selectedOpacity: 0.36,
      focusOpacity: 0.38,
      activatedOpacity: 0.28
    },
    background: {
      paper: '#fff',
      default: '#F4F8FF'
    }
  }
}

export default Theme
