import React from "react";
import "./task-list.css";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, index) => (
          <div key={index} className="task__container">
            <div className="task__control">
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => this.props.onTaskDone(index, e)}
              />

              <button
                className="delete__button"
                onClick={() => this.props.onTaskDelete(index)}
              >
                Delete
              </button>
            </div>
            <p className="task__text">{task.task}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default TaskList;
