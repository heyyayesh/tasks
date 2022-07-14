import React from "react";

class Tasks extends React.Component{
  constructor(){
    super();

    this.tasksElement = this.tasksElement.bind(this);
  }

  tasksElement(){
    return(
      this.props.taskArr.map((task, i) => {
        return (
          <div key={i} className="task">
            <div key={task.id}><b>{task.num}. </b>{task.text}</div>
            <button id={task.id} onClick={this.props.delete}>Del</button>
          </div>
        )
      })
    );
  }

  render(){
    return (
      this.tasksElement()
    );
  }
}

export default Tasks;