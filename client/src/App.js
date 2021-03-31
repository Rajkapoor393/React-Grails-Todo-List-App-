//import React, {Component} from 'react';
import AppNav from './AppNav';
import {Row} from 'reactstrap'
//
//import grailsLogo from './images/grails-cupsonly-logo-white.svg';
//import reactLogo from './images/logo.svg';
//import {CLIENT_VERSION, REACT_VERSION, SERVER_URL} from './config';
//import 'whatwg-fetch';
//import Footer from "./Footer";
//
//class App extends Component {
//
//  constructor() {
//    super();
//
//    this.state = {
//      serverInfo: {},
//      clientInfo: {
//        version: CLIENT_VERSION,
//        react: REACT_VERSION
//      },
//      collapse: false
//    }
//  }
//
//  toggle = () => {
//    this.setState({collapse: !!this.state.collapse})
//  };
//
//  componentDidMount() {
//    fetch(SERVER_URL + '/application')
//      .then(r => r.json())
//      .then(json => this.setState({serverInfo: json}))
//      .catch(error => console.error('Error connecting to server: ' + error));
//
//  }
//
//  render() {
//    const {serverInfo, clientInfo, collapse} = this.state;
//
//    return [
//      <AppNav serverInfo={serverInfo} clientInfo={clientInfo} collapse={collapse} toggle={this.toggle} key={0}/>,
//      <div className="grails-logo-container" key={1}>
//        <img className="grails-logo" src={grailsLogo} alt="Grails"/>
//        <span className="plus-logo">+</span>
//        <img className="hero-logo" src={reactLogo} alt="React"/>
//      </div>,
//
//      <Row key={2}>
//        <div id="content">
//          <section className="row colset-2-its">
//            <h1 style={{textAlign: 'center'}}>Welcome to Grails</h1>
//            <br/>
//            <p>
//              Congratulations, you have successfully started your Grails & React application! While in
//              development mode, changes will be loaded automatically when you edit your React app,
//              without even refreshing the page.
//              Below is a list of controllers that are currently deployed in
//              this application, click on each to execute its default action:
//            </p>
//
//            <div id="controllers" role="navigation">
//              <h2>Available Controllers:</h2>
//              <ul>
//                {serverInfo.controllers ? serverInfo.controllers.map(controller => {
//                  return <li key={controller.name}><a
//                    href={SERVER_URL + controller.logicalPropertyName}>{controller.name}</a>
//                  </li>;
//                }) : null}
//              </ul>
//            </div>
//          </section>
//
//        </div>
//
//      </Row>,
//      <Footer key={3}/>
//    ];
//  }
//}
//
//export default App;

// For todo app (code starts from here)
import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import About from "./components/pages/About";

const Router = require("react-router-dom").BrowserRouter;

const Route = require("react-router-dom").Route;

const Link = require("react-router-dom").Link;

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Eat',
        completed: false
      },
      {
        id: uuid(),
        title: 'Code',
        completed: false
      },
      {
        id: uuid(),
        title: 'Sleep',
        completed: false
      },
      {
        id: uuid(),
        title: 'Repeat',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
