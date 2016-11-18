import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './Week.js';
import Header from './Header.js';
import EnterData from './EnterData.js';
import Data from './database/data.js';
import AddContainer from './AddContainer.js';

let headline = "Welcome to React";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data:Data, headline:headline, addedData:[]};
    this.addBookmarkToState = this.addBookmarkToState.bind(this);
    this.addWeekToState = this.addWeekToState.bind(this);
  }

  addBookmarkToState(data,week){
    this.state.data[week]=this.state.data[week].concat([data]);
    this.setState({data:this.state.data});
    window.setTimeout(()=>console.log(this.state.addedData), 1000);
  }

  addWeekToState(weekName){
    this.state.data[weekName] = [];
    console.log(this.state.data);
    this.setState({data:this.state.data});
  }

  render() {
    let Data = this.state.data;
    let AddData = this.addBookmarkToState;
    let returnArray = []
    Object.keys(this.state.data).map(function(a){returnArray.push(<Week content={Data[a]} week={a} addData={AddData}/>);});

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header headline={this.state.headline}/>
        </div>
        <div className="App-intro">
        {returnArray}
        <AddContainer name="Week" addWeekToState={this.addWeekToState}/>
        </div>
        <div className="Main-App">
        </div>
      </div>
    );
  }

}

export default App;
