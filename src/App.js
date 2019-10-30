import React, { Component }  from 'react';
import Header from "./Header";
import Add from "./Add";
import CountIncomp from "./CountIncomp"
import IncompItem from "./IncompItem"
import ItemComp from "./ItemComp"
import Complete from './Complete';

import './App.css';


class App extends Component {
  state = {
    tasks: [
      {text: "take out the trash", completed: false, date: "2019-10-21",id:1},
      {text: "bake cake", completed: true, date: "2019-10-21",id:2},
      {text: "buy grocerys", completed: false, date: "2019-10-21",id:3},
      {text: "clean the floor", completed: true, date: "2019-10-21",id:4},
    ]
  }
  deleteItem =(index, e) => {
    const tasks = Object.assign([], this.state.tasks)
    tasks.splice(index, 1);
    this.setState({tasks:tasks})
  }

  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice()

    const newTask = {
      text: taskText,
       completed: false,
        date: "2019-10-21",
        id:5
    };
    tasksCopy.push(newTask)
    this.setState({
      tasks:tasksCopy
    });
  };
  handleDelete (event) {

  }
  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed
    });

    const incompletedTasks = this.state.tasks.filter(task => {
      return task.completed ? false : true;
    });

    return (
      <div className="container">
        <Header />
        <Add addNewTaskFunc={this.addNewTask} />
        <CountIncomp count/>
        
        {incompletedTasks.map((task, index)=>{
        return<IncompItem text={task.text} completed={task.completed} time={task.date} key={task.id} handleDelete={this.deleteItem.bind(this,index)} />
        })};
        
        <ItemComp />

        {completedTasks.map((task, index)=>{
        return<Complete text={task.text} completed={task.completed} time={task.date} key={task.id} handleDelete={this.deleteItem.bind(this,index)}/>
        })};
        
        



    </div>
  );
    }
}

export default App;
