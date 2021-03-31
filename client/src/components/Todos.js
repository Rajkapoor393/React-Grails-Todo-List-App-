import { Component } from "react";
import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todos) => (
                <TodoItem key={todos.id}
                    todo={todos} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            ))
        )
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
