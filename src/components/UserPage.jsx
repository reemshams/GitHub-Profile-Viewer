import React, { Component } from 'react'
import { Image, H2, H3, Para, Row, Span, ProfileLink, Followers, Following, Repos, Wrap } from '../../src/styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default class UserPage extends Component {

   constructor(props) {
      super(props)
      this.state = {
         username: this.props.match.params,
         name:'',
         avatar:'',
         location:'',
         subscriptions_data:'',
         repos:'',
         repos_data: [],
         followers: '',
         followers_data: [],
         following:'',
         following_data: [],
         homeUrl:'',
         notFound:''
      }
   }
   

   getUser(username) {
      return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(user => {
         this.setState({
            name: user.name,
            avatar: user.avatar_url,
            location: user.location,
            subscriptions_url: user.subscriptions_url,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            homeUrl: user.html_url,
            notFound: user.message
         });
      }).
      catch(error => {
         console.log({error});
      })
   }

   getFollowers(username) {
      return fetch(`https://api.github.com/users/${username}/followers`)
      .then(response => response.json())
      .then(data => {
         this.setState({
            followers_data: data
         });
      }).
      catch(error => {
         console.log({error});
      })
   }

   getFollowing(username) {
      return fetch(`https://api.github.com/users/${username}/following`)
      .then(response => response.json())
      .then(data => {
         this.setState({
            following_data: data
         });
      }).
      catch(error => {
         console.log({error});
      })
   }

   getRepos(username) {
      return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
         this.setState({
            repos_data: data
         });
      }).
      catch(error => {
         console.log({error});
      })
   }

   
   componentDidMount() {
      this.getUser(this.state.username.username);
      this.getFollowers(this.state.username.username);
      this.getFollowing(this.state.username.username)
      this.getRepos(this.state.username.username);
   }

 
   render() {

      return (
         <Router>
            <div>
               <Image src={this.state.avatar} alt="Avatar"/>

               <Wrap>
                  <H2>{this.state.name} <span>( {this.state.location} )</span></H2>
                  <ProfileLink href={this.state.homeUrl} target="_blank">View GitHub profile</ProfileLink>
               </Wrap>

               <Row>
                  <Para>
                     <Link to="/followers" className="link"><b>Followers:</b> 
                     <Span>{this.state.followers}</Span></Link>
                  </Para>

                  <Para >
                     <Link to="/following" className="link"><b>Following:</b> <br />
                     <Span>{this.state.following}</Span></Link>
                  </Para>

                  <Para>
                     <Link to="/repos" className="link"><b>Repositories:</b> <br />
                     <Span>{this.state.repos}</Span></Link>
                  </Para>
               </Row>

               <Row>
                  <Route path="/followers" render={() => 
                     <Followers> 
                     <H3>Followers:</H3> 
                        <ul>{this.state.followers_data.map(function (user) {
                              return <li><ProfileLink href={user.html_url} target="_blank>">{user.login}</ProfileLink></li>}
                           )}
                        </ul>
                     </Followers>}/>

                  <Route path="/following" render={() => 
                     <Following> 
                     <H3>Following:</H3> 
                        <ul>{this.state.following_data.map(function (user) {
                              return <li><ProfileLink href={user.html_url} target="_blank>">{user.login}</ProfileLink></li>}
                           )}
                        </ul>
                     </Following>}/>

                  <Route path="/repos" render={() =>  
                     <Repos> 
                     <H3>Repositories:</H3> 
                        <ul>{this.state.repos_data.map(function (user) {
                              return <li><ProfileLink href={user.html_url} target="_blank>">{user.name}</ProfileLink></li>}
                           )}
                        </ul>
                     </Repos>}/>
               </Row>
            </div>
         </Router>
      );
   }
}
