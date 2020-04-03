import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const TodoForm = ({addTodo}) => {
  let input;
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} 
      placeholder="Type to add new task then press enter ..."
      aria-label="New task input"
      autoFocus/>
      <br />
    </form>
  );
};

const Todo = ({todo}) => {
  // Each Todo
  return (<li className="list-group-item">{todo.text}</li>);
}

const TodoList = ({todos}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id}/>)
  });
  return (<ul className="list-group" style={{marginTop:'30px'}}>{todoNode}</ul>);
}

window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  addTodo(val){
    const todo = {text: val, id: window.id++}
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }


  render(){
    return (
      <div className="container">
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
        />
      </div>
    );
  }
}
export default TodoApp;
