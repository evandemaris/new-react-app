import React, { Component } from 'react';

class AddContainer extends Component {
  constructor() {
    super();
    this.state={newWeekName:"",}
  }

  weekNameInput(e) {
      this.setState({newWeekName:e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addWeekToState(this.state.newWeekName);
  }
  render() {
    let htm="b" + Math.random();
    return(
      <form>
      <label htmlFor={htm}>Add a New Week:</label><br/>
        <input value={this.state.newWeekName} onChange={this.weekNameInput.bind(this)} id={htm}/><br/>
        <button onClick={this.submitHandler.bind(this)}>Add that week!</button>
      </form>
    );
  }
}

export default AddContainer;
