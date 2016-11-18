import React, { Component } from 'react';
import EnterData from './EnterData.js'

class Week extends Component {
  render() {
    let renderMe = [];
    renderMe.push(<div><h1>{this.props.week}</h1><EnterData addData={this.props.addData} week={this.props.week}/></div>);
    this.props.content.map(function(a) {
        renderMe.push(
          <div>
            <p><a href={a.link}>{a.title}</a></p>
          </div>
        );
      }
    );
    return(<div>{renderMe}</div>);
  }
}

export default Week;
