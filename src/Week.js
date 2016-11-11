import React, { Component } from 'react';
import EnterData from './EnterData.js'

class Week extends Component {
  render() {
    let renderMe = []
    let lastWeek;
    let thisWeek = this.props.week;
    let addData = this.props.addData;
    this.props.content.map(function(a) {
        if(thisWeek !== lastWeek) {
          renderMe.push(<div><h1>Week {thisWeek}</h1><EnterData addData={addData} week={thisWeek}/></div>);
          lastWeek=thisWeek;
        }
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
