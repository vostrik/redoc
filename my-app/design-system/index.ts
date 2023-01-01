import { globalThemeTokens, themeTokens } from './tokens.css'

import { lightTheme } from './themes/light.css'

export type ThemeKeys = 'light'

export const themes = {
  light: lightTheme,
}

export * from './themes/global.css'

export const tokens = {
  ...globalThemeTokens,
  ...themeTokens
}

