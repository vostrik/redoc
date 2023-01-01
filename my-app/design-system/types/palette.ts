enum ColorTone {
  tone300 = 300,
  tone500 = 500,
  tone700 = 700
}

enum ColorVariant {
  primary = 'primary',
  secondary = 'secondary'
}

export type Color = {
  [key in ColorTone]: string
}

export type Palette = {
  [key in ColorVariant]: Color
}
