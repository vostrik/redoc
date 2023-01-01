import { style } from '@vanilla-extract/css'

import { tokens } from '../../design-system'


export const footer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
})

export const product = style({
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: tokens.typography.fontSize.md
})

export const productDescription = style({
  fontSize: tokens.typography.fontSize.sm
})

export const navLink = style({
  display: 'block',
  fontSize: tokens.typography.fontSize.sm,
  color: tokens.palette.primary[500]
})

export const navHeader = style({
  fontSize: tokens.typography.fontSize.md,
  fontWeight: 600,
  marginBottom: tokens.spacing.md,
  color: tokens.palette.primary[700]
})
