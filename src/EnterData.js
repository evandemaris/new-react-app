import React, { Component } from 'react';

class EnterData extends Component {
  constructor() {
    super();
    this.state={descripValue:"", urlValue:"",}
  }

  descripUpdate(e) {
      this.setState({descripValue:e.target.value});
  }
  urlUpdate(e) {
    this.setState({urlValue:e.target.value});
  }
  submitHandler(e) {
    e.preventDefault();
    if(this.state.urlValue.includes("http")){
        this.props.addData({title:this.state.descripValue, link:this.state.urlValue,},('week' + this.props.week));
    } else {
        this.props.addData({title:this.state.descripValue, link:('http://'+this.state.urlValue),},('week' + this.props.week));
    }

  }
  render() {
    return(
      <form>
      <label htmlFor="title">Description of link:</label><br/>
        <input value={this.state.descripValue} onChange={this.descripUpdate.bind(this)} id="title"/><br/>
        <label htmlFor="url">Link url:</label><br/>
        <input value={this.state.urlValue} onChange={this.urlUpdate.bind(this)} id="url"/>
        <button onClick={this.submitHandler.bind(this)}>Add that link!</button>
      </form>
    );
  }
}

export default EnterData;
