import {
  createThemeContract,
  createGlobalThemeContract
} from '@vanilla-extract/css'

import { Palette } from './types/palette'
import { Size } from './types/size'

const spacing: Size = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: ''
}

const fontSize: Size = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: ''
}

const lineHeight: Size = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: ''
}

const fontFamily = {
  normal: '',
  mono: ''
}

const palette: Palette = {
  primary: {
    300: '',
    500: '',
    700: ''
  },
  secondary: {
    300: '',
    500: '',
    700: ''
  }
}

export const globalThemeTokens = createGlobalThemeContract({
  spacing,
  typography: {
    fontSize,
    lineHeight,
    fontFamily
  }
})

export const themeTokens = createThemeContract({
  palette
})
