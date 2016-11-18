import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from './Week.js';
import Header from './Header.js';
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
    let dataref = this.state.data;
    dataref[week]=dataref[week].concat([data]);
    this.setState({data:dataref});
    //window.setTimeout(()=>console.log(this.state.addedData), 1000);
  }

  addWeekToState(weekName){
      let dataref = this.state.data;
      dataref[weekName] = [];
      this.setState({data:dataref});
  }

  render() {
    let Data = this.state.data;
    let AddData = this.addBookmarkToState;
    let returnArray = []
    let key=0;
    Object.keys(this.state.data).map(function(a){key++; returnArray.push(<Week key={key} content={Data[a]} week={a} addData={AddData}/>); return null;});

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
