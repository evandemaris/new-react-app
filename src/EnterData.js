import React, { Component } from 'react';

class EnterData extends Component {
  constructor() {
    super();
    this.state={inputValue:"Car phone"}
  }
  valueUpdate(a) {
    this.setState({inputValue:a.target.value});
  }
  render() {
    let clickHandler = function(e) {e.preventDefault(); this.props.addData(e.target.value);}
    return(
      <form>
        <input value={this.state.inputValue} onChange={this.valueUpdate.bind(this)}/>
        <button onClick={clickHandler.bind(this)}>Add your data</button>
      </form>
    );
  }
}

export default EnterData;
