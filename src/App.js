import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
class App extends Component {
  state = {
    todos: [
    
    ]
  }
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos
    });
  }
  addTodo = (todo) => {
    todo.id = this.state.todos.length !== 0 ? (this.state.todos[this.state.todos.length -1].id + 1) : (1);
    const newTodos = [...this.state.todos , todo];
    this.setState({
      todos: newTodos
    });
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center indigo-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
