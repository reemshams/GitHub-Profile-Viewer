import styled, { injectGlobal } from 'styled-components';


injectGlobal`
  body {
      margin: 0;
      padding: 0;
      background-color: #FFE5E5;
  }

  .link {
     color: crimson;
     font-family: 'Bahnschrift';
  }

  .link:hover {
     text-decoration: none;   
     color: indianred;
  }

   input {
      padding: .3em .7em;
      text-align: center;
      margin-top: 1em;
      color: crimson;
      font-size: .7em;
      background: #FFE5E5;
      border: none;
      border-radius: 5px;

      &::placeholder {
         vertical-align: middle;
         color: indianred;
      }
   }
`;

export const Wrap = styled.div`
   text-align: center; 
`

export const Image = styled.img`
   max-height: 10em;
   max-width: 10em;
   display: block;
   width: 50%;
   margin: 2em auto 1em;
`

export const H2 = styled.h2`
   font-size: 1.5em;
   font-family: 'Merriweather Sans', Tahoma, Geneva, Verdana, sans-serif;

   span{
      font-size: .6em;
      text-transform: uppercase;
   }
`

export const H3 = styled.h3`
   text-decoration: underline;
   font-size: 1.5em;
   font-family: 'Bahnschrift', Tahoma, Geneva, Verdana, sans-serif;
   padding-left: 1.7em;
`

export const ProfileLink = styled.a`
   font-size: 1em;
   text-align: center;
   font-family: 'Merriweather Sans';
   margin: 0 auto;
   
   &:hover {
      text-decoration: none;
      color: blueviolet;
   }
`

export const Row = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
   width: auto;
   text-align: center;
   margin-top: 1em;
`

export const Para = styled.p`
   text-align: center;
   font-size: 1.3em;
`

export const Span = Para.extend`
   font-size: .7em;
   font-family: 'Montserrat';
   color: blueviolet;

   &:hover {
      text-decoration: none;
      color: blueviolet;
   }
`

export const Followers = styled.div`
   float: left;

   li{
      list-style: none;
   }
`

export const Following = styled.div`
   text-align: center;

   li{
      list-style: none;
   }
`

export const Repos = styled.div`
   float: right;

   li{
      list-style: none;
   }
`