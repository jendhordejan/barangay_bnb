import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      font-family: 'Antic Didone', serif;
      color: #2b3a44;
      
      opacity: 0.8;
      height: 100%;
    }
`
