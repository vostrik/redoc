import { createGlobalTheme } from '@vanilla-extract/css'

import { globalThemeTokens } from '../tokens.css'

export const globalTheme = createGlobalTheme(':root', globalThemeTokens, {
  spacing: {
    xs: '4',
    sm: '8',
    md: '16',
    lg: '32',
    xl: '64'
  },
  typography: {
    fontSize: {
      xs: '10',
      sm: '12',
      md: '18',
      lg: '28',
      xl: '40'
    },
    lineHeight: {
      xs: '20',
      sm: '20',
      md: '30',
      lg: '40',
      xl: '60'
    },
    fontFamily: {
      normal: '-apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      mono: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
    }
  }
})
