import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import './App.css';
import TodoList from './Components/TodoList';

export default class App extends Component {
  render() {
    return(
      // contains the react router and its links/paths
      <Router>
        <div className="links">
          <ul className="navbar navbar-expand-sm navbar-dark">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/todo">Todo App</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/todo'>
              <Todo />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );   
  }
}
//contains the information and image for my home page
function Home() {
  return (
    <div className="center">
      <h1>Welcome to my home page!</h1>
      <div className="image1">
        <img src="me.jpg" alt="pic of me" width="250" height="400"/>
      </div>
      <h3>My name is Sybil and I created this website as the final project for my front-end development bootcamp.
      If you would like to try out my todo application please click on my todo app link in the top left corner!</h3>
    </div>  
  )
}
//contains the information and image for my about page
function About() {
  return (
    <div>
      <h1>Welcome to my about page!</h1>
      <div className="container">
        <img src="journey.jpg" alt="pic of journey" />
        <div className="centered-top">Tasks are just small steps on your journey</div>
      </div>
      <h3>For my final project for my front-end development bootcamp I choose to develop a todo website application.
      This todo application will help you keep track of tasks or goals you would like to achieve.
      It also sorts them by completed and incomplete.  Sometimes just being able to cross off a task is enough to keep you motivated! 
      You can keep track of how far you have come and how hard you have worked. If you would like to try out my todo application please click on my todo app link in the top left corner.</h3>
    </div>  
  )
}
//contains the information for my todo page and imports the todo application
function Todo() {
  return (
    <div>
      <h1>Welcome to my todo application page!</h1>
      <TodoList />
    </div>  
  )
}