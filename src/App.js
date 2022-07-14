import React from 'react';
import './App.css';
import Tasks from './components/Overview';
import uniqid from "uniqid";

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      taskNum: 1,
      task: {
        text: '',
        id: uniqid(),
        num: 0,
      },
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.delTask = this.delTask.bind(this);
  }

  handleChange(){
    const inputText = document.getElementById('input').value;
    this.setState({
      task: {
        text: inputText,
        id: this.state.task.id,
        num: this.state.taskNum,
      }
    });
  }

  handleClick(){
    const inputText = document.getElementById('input').value;
    if(inputText === null || inputText === '') return;
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
      taskNum: this.state.taskNum + 1,
    });
  }

  handleKeyDown(e){
    if(e.key === 'Enter') this.handleClick();
  }

  delTask(e){
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task.id !== e.target.id;
      })
    })
  }

  render(){
    return (
      <div className='App'>
        <div className='input-div'>
          <label htmlFor='input'>Add Tasks</label>
          <input type='text' id='input' onChange={this.handleChange} onKeyDown={this.handleKeyDown} autoComplete='off' value={this.state.task.text} maxLength='100'/>
          <button id='btn' onClick={this.handleClick}>Submit</button>
        </div>
        <div className='tasks-div'>
          <h1>My Tasks</h1>
          <div className='task-comp'>
            <Tasks delete={this.delTask} taskArr={this.state.tasks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
