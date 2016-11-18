import React, { Component } from 'react';
import EnterData from './EnterData.js'

class Week extends Component {
  render() {
    let renderMe = [];
    let key=0;
    renderMe.push(<div key={key}><h1>{this.props.week}</h1><EnterData addData={this.props.addData} week={this.props.week}/></div>);
    this.props.content.map(function(a) {
      key++;
        renderMe.push(
          <div key={key}>
            <p><a href={a.link}>{a.title}</a></p>
          </div>
        ); return null;
      }
    );
    return(<div>{renderMe}</div>);
  }
}

export default Week;
