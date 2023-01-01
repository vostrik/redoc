enum SizeLine {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export type Size = {
  [key in SizeLine]: string
}
