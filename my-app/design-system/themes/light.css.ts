import { createTheme } from '@vanilla-extract/css'

import { themeTokens } from '../tokens.css'

export const lightTheme = createTheme(themeTokens, {
  palette: {
    primary: {
      300: '#e5e7eb',
      500: '#404756',
      700: '#23272f'
    },
    secondary: {
      300: '#e6f7ff',
      500: '#087ea4',
      700: '#054a61'
    }
  }
})
