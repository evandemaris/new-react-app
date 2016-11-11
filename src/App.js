import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './Week.js';
import Header from './Header.js';
import EnterData from './EnterData.js';
import Data from './database/data.js';

let headline = "Welcome to React";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data:Data, headline:headline, addedData:[]};
    this.addData = this.addData.bind(this);
  }

  addData(data,week){
    this.state.data[week]=this.state.data[week].concat([data]);
    this.setState({data:this.state.data});
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
          <Week content={this.state.data.week1} week="1" addData={this.addData}/>
          <Week content={this.state.data.week2} week="2" addData={this.addData}/>
          <Week content={this.state.data.week3} week="3" addData={this.addData}/>
        </div>
        <div className="Main-App">
        </div>
      </div>
    );
  }

}

export default App;
