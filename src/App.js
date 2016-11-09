import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './Week.js';
import Header from './Header.js';
import EnterData from './EnterData.js';
import Data from './database/data.js';

let headline = "Welcome to React";
let weeks = Data;

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {weeks:weeks, headline:headline, addedData:[]};
  this.addData = this.addData.bind(this);
  }
  addData(a){
    this.setState({addedData:this.state.addedData.concat([a])});

    window.setTimeout(()=>console.log(this.state.addedData), 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header headline={this.state.headline}/>
        </div>
        <div className="App-intro">
          <Week content={this.state.weeks.week1} week="1"/>
          <Week content={this.state.weeks.week2} week="2"/>
          <Week content={this.state.weeks.week3} week="3"/>
        </div>
        <div className="Main-App">
          <EnterData addData={this.addData}/>
        </div>
      </div>
    );
  }

}

export default App;
