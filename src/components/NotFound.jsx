import React, { Component } from 'react'
import styled from 'styled-components'

export default class NotFound extends Component  {
   render() {
      return (
         <Wrapper>
            <Heading>
               Umm...sorry..Page is not found 😕
            </Heading>

            <Para>Couldn't find what you're looking for. <br/> Check whether you are accessing the right component.</Para>
         </Wrapper>
       
      )
   }
}

const Wrapper = styled.div`
   transform: translateY(80%);
`

const Heading = styled.div`
   text-align: center;
   font-size: 3em;
   color: crimson;
   font-family: 'Snap ITC', Tahoma, Geneva, Verdana, sans-serif;
`

const Para = styled.div`
   text-align: center;
   font-size: 1.5em;
   font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif;
   margin-top: 1.3em;
`
