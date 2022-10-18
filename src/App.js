import React from "react";
import TaskList from "./TaskList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tasks: [],
    };
  }

  addTask = (text) => {
    if (this.state.text !== "") {
      this.setState({
        tasks: [...this.state.tasks, { isDone: false, task: text }],
        text: "",
      });
    } else {
      alert("Please enter a task");
    }
  };
  onInputchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onTaskDone = (index, e) => {
    const tasks = [...this.state.tasks];
    tasks[index].isDone = e.target.checked;
    this.setState({ tasks });
  };
  onTaskDelete = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ "text-align": "center", margin: "20px 0" }}>
          To Do List App
        </h1>
        <div className="task__input--container">
          <input
            className="task__input"
            type="text"
            name="text"
            placeholder="Add Task"
            value={this.state.text}
            onChange={this.onInputchange}
          />
          <button
            className="button__add"
            onClick={() => this.addTask(this.state.text)}
          >
            Add
          </button>
        </div>
        <TaskList
          tasks={this.state.tasks}
          onTaskDone={this.onTaskDone}
          onTaskDelete={this.onTaskDelete}
        />
      </div>
    );
  }
}

export default App;
