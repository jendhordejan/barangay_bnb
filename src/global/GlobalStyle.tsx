import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      font-family: 'Antic Didone', serif;
      color: #2b3a44;
      background: linear-gradient( to left, #ffffff 50%, rgba(230, 237, 238, 0.377) 50%);
      opacity: 0.8;
    }
`
