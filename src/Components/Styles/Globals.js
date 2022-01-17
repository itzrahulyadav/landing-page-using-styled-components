import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@300&family=Poppins:wght@300;400;500&display=swap');
  img{
      width:80%;
  }

  body{
      background:${({theme}) => theme.colors.body};
      colors:hsl(192,100%,9%);
      font-family:'Poppins',sans-serif;
      font-size:1.15em;
      margin:0;
  }
  p{
      opacity:0.6;
      line-height:1.5
  }
`

export default GlobalStyles;