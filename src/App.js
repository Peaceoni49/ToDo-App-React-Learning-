import React, { Component }  from 'react';
import uuid from "uuid/v4"
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
      {text: "take out the trash", completed: false, date: "2019-10-21",id:uuid()},
      {text: "bake cake", completed: true, date: "2019-10-21",id:uuid()},
      {text: "buy grocerys", completed: false, date: "2019-10-21",id:uuid()},
      {text: "clean the floor", completed: true, date: "2019-10-21",id:uuid()},
    ]
  }
  

  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice()

    const newTask = {
      text: taskText,
       completed: false,
        date: "2019-10-21",
        id:uuid()
    };
    tasksCopy.push(newTask)

    this.setState({
      tasks:tasksCopy
    });
  };
  deleteTask = id => {
    const filteredTasks =this.state.tasks.filter(task => {
      return task.id !== id
    });

    this.setState({
      tasks:filteredTasks
    });
  }

  completeTask = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id)
      {
        task.completed =true;
      }

      return task;
    });

    this.setState({
      tasks: updatedTasks
    });
  }
  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed ;
    });

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.completed ? false : true;
    });

    return (
      <div className="container">
        <Header />
        <Add addNewTaskFunc={this.addNewTask} />
        <CountIncomp count/>
        
        {incompleteTasks.map((task)=>{
        return(
        <IncompItem text={task.text} completed={task.completed} time={task.date} key={task.id} id={task.id} deleteTaskFunc={this.deleteTask} completeTaskFunc={this.completeTask}/>
        );
        })};
        
        <ItemComp />

        {completedTasks.map((task, index)=>{
        return(
          <Complete text={task.text} completed={task.completed} time={task.date} key={task.id} id={task.id} deleteTaskFunc={this.deleteTask} />
        );
        })};
        
        



    </div>
  );
    }
}

export default App;
