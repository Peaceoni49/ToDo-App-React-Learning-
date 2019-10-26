import React, { Component }  from 'react';
import Header from "./Header";
import Add from "./Add";
import CountIncomp from "./CountIncomp"
import IncompItem from "./IncompItem"
import ItemComp from "./ItemComp"
import Complete from './Complete';

import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      {text: "take out the trash", completed: false, date: "2019-10-21",id:1},
      {text: "bake cake", completed: true, date: "2019-10-21",id:1},
      {text: "buy grocerys", completed: false, date: "2019-10-21",id:1},
      {text: "clean the floor", completed: true, date: "2019-10-21",id:1},
    ]
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
        <Add />
        <CountIncomp count/>
        
        {incompletedTasks.map(task=>{
        return<IncompItem text={task.text} completed={task.completed} time={task.date} key={task.id} />
        })};
        
        <ItemComp />

        {completedTasks.map(task=>{
        return<Complete text={task.text} completed={task.completed} time={task.date} key={task.id} />
        })};
        
        



    </div>
  );
    }
}

export default App;
