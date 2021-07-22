import glamorous from 'glamorous'
import { Link as RRLink } from 'react-router-dom'
import { css } from 'glamor'

import theme from '../theme/index'

const colors = {
  primary: {
    btnBg: theme.color.brandBlue,
    btnBgHover: theme.color.brandBlueDark,
  },
  secondary: {
    btnBg: theme.color.brandOrange,
    btnBgHover: theme.color.brandOrangeDark,
  },
  warning: {
    btnBg: theme.color.errorRed,
    btnBgHover: theme.color.errorRedDark,
  },
}

const StyledLikeButton = css({
  minWidth: '120px',
  height: '40px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '1.25em',
  display: 'inline-block',
  padding: '0.625em 1.5em',
  boxShadow: '0 0 0 5px red',
  fontWeight: '400',
  letterSpacing: '0.4px',
  border: '1px solid transparent',
  color: '#fff',
  textDecoration: 'none',
  transition: '.2s all ease',
})

// Define each button type, with ghost prop, defaults to primary and no ghost
const btnTypes = ({ kind = 'primary', ghost = false }) => ({
  backgroundColor: ghost ? '#fff' : colors[kind].btnBg,
  borderColor: ghost ? 'currentColor' : colors[kind].btnBg,
  color: ghost ? colors[kind].btnBg : '#fff',
  '&:hover': {
    backgroundColor: ghost ? colors[kind].btnBg : colors[kind].btnBgHover,
    borderColor: ghost ? colors[kind].btnBg : colors[kind].btnBgHover,
    color: '#fff',
  },
})

export const Button = glamorous.button(StyledLikeButton, btnTypes)

export const A = glamorous.a(StyledLikeButton, btnTypes)
export const Link = glamorous(RRLink)(StyledLikeButton, btnTypes)
