import React, { Component }  from 'react';
import Header from "./Header";
import Add from "./Add";
import CountIncomp from "./CountIncomp"
import IncompItem from "./IncompItem"
import ItemComp from "./ItemComp"
import Complete from './Complete';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Add />
        <CountIncomp />
        <IncompItem />
        <IncompItem />
        <IncompItem />
        <ItemComp />
        <Complete />
        



    </div>
  );
    }
}

export default App;
