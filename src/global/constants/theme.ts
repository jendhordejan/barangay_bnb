import { rgba } from 'polished'
import { css } from 'styled-components'


export const font = {
  family: {
    primary: 'Antic Didone, serif',
  },
  weight: {
    extraBold: 900,
    bold: 700,
    semiBold: 600,
    regular: 400,
    thin: 300,
    minimal: 100,
  },
  size: {
    xl: '24px',
    l: '20px',
    m: '16px',
    s: '14px',
    xs: '12px',
  },
}

export const palette = {
  /* Theme colors */
  primary: '#2b3a44',
  secondary: '#e7e3e3',

  /* Standard colors */
  black: '#333333',
  white: '#ffffff',
  gray: '#e8e8e8',
  grayLight: '#f2f2f2',
  grayDark: '#dcdcdc',
  grayDarker: '#c1c1c1',
  fadedWhite: rgba('#ffffff', 0.3),

  /* Feedback colors  */
  error: '#e22f01',
  errorLight: '#FCEAE5',
  success: '#04b31c',
  successLight: '#cdf0d2',
  warning: '#f9a825',
  warningLight: '#feeed3',
  highlight: '#efe7ff',
}

export const bgImg = {
  primary: 'linear-gradient(-25deg, #616161 0%, #96B7C4 100%)'
}


export const size = {
  lineHeight: {
    double: 2,
    xl: 1.75,
    l: 1.66,
    m: 1.5,
    s: 1.33,
    xs: 1.25,
    default: 1,
  },
  space: {
    xxxl: '160px',
    xxl: '88px',
    xl: '56px',
    l: '32px',
    m2: '24px',
    m1: '20px',
    m: '16px',
    s: '8px',
    xs: '4px',
  },
  letterSpacing: {
    xl: 1.25,
    l: 0.5,
    m: 0.25,
    s: 0.1,
    xs: 0.01,
    none: 0,
  },
  drawer: {
    desktopClosed: '60px',
    desktopOpened: '285px',
    mobile: '285px',
  },
  header: {
    desktop: '50px',
    mobile: '50px',
  },
}

export const layout = {
  center: 'display: flex; align-items: center; justify-content: center;',
  fullSpace: 'height: 100%; width: 100%;',
}

export const disabledTextSelection = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version*/
`

export const onDevice = {
  desktop: `@media only screen and (min-width: 768px)`,
  mobile: `@media only screen and (max-width: 768px)`,
}

export const onDeviceMedia = {
  desktop: `screen and (min-width: 1024px)`,
  mobile: `screen and (max-width: 768px)`,
}
