import React, { Component } from 'react';

class Week extends Component {
  render() {
    let renderMe = []
    let lastWeek;
    let thisWeek = this.props.week;
    this.props.content.map(function(a) {
        let warning=function(arg){alert('"' + a.title + '"' + ' was clicked');}
        if(thisWeek !== lastWeek) {
          renderMe.push(<h1>Week {thisWeek}</h1>);
          lastWeek=thisWeek;
        }
        renderMe.push(
          <div>
            <p><a href={a.link}>{a.title}</a></p>
            <p><button onClick={warning}>Click Me</button></p>
          </div>
        );
      }
    );
    return(<div>{renderMe}</div>);
  }
}

export default Week;
