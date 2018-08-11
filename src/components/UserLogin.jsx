import React, { Component } from 'react'
import styled from 'styled-components'


export default class UserLogin extends Component {

   constructor(props) {
      super(props);     
      this.state = {
         username: ''
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   
   async handleSubmit(event) {
      event.preventDefault();

      const {history} = this.props;
      const trials = history.push(`/users/${this.refs.username.value}`);
      console.log(trials);
   }

   handleChange(event) {
      this.setState({username: event.target.value});
   }
   

   render() { 

      return (

         <Wrapper>
            <span style={{ marginBottom: "1em", color: "blue"}}>Enter username of a public profile: </span>
            <form onSubmit={event => this.handleSubmit(event)}>
               <input type="text" 
               ref="username"
               value = {this.state.value} 
               onChange = {this.handleChange}
               placeholder="Enter github username"/>
               <br/>
               <Button type="submit">Open</Button>
            </form>
         </Wrapper>

      );
   }
}

   // STYLES 

const Wrapper = styled.div`
   width: 50%;
   margin: 5% auto 3em;
   padding: 3em 0;
   background-color: aliceblue;
   text-align: center;
   font-size: 1.5em;
   vertical-align: middle;
`

const Button = styled.button`
   background-color: lightblue;
   font-weight: 700;
   font-size: .6em;
   text-transform: uppercase;
   color: blue;
   border: none;
   border-radius: 7px;
   outline: 1px solid navyblue;
   cursor: pointer;
   padding: .3em 1em;
   margin-top: 1em;
`
