import React from 'react';
import uniqueId from './utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { todo: {} };
    this.state = { todo: {id: "", title: "", body:""} };
    this.updateTodo = this.updateTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state.todo =
  }

  updateTodo(e) {
    // const todo = {title: e.target.value};
    // console.log(todo);
    console.log(e.target.value);
    const todo =  {id: uniqueId(), title: e.target.value };
    this.setState({todo});
  }

  handleSubmit(e) {
    e.preventDefault();


    this.props.receiveTodo(this.state.todo);
    this.setState({ todo: {id: "", title: "", body:""}});
    // console.log('this state todo:', this.state.todo.title);
  }

  render() {
    return (
      <div>
        <form>
          <label>Title
            <input
              className="form-title"
              type="text"
              onChange={this.updateTodo}
              value={this.state.todo.title}
            />
          </label>
          <button onClick={this.handleSubmit}>Add Todo!</button>
        </form>
      </div>
    );
  }
}
// value={this.state.todo.title}
// <label>Body
//   <input
//     className="form-body"
//     type="text"
//     onChange={this.updateTodo}
//     />
// </label>
// <input type="submit" value="submit" />


export default TodoForm;
