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
        this.props.addData({title:this.state.descripValue, link:this.state.urlValue,},(this.props.week));
    } else {
        this.props.addData({title:this.state.descripValue, link:('http://'+this.state.urlValue),},(this.props.week));
    }

  }
  render() {
    let htm="b" + Math.random();
    let ur="a" + Math.random();
    return(
      <form>
      <label htmlFor={htm}>Description of link:</label><br/>
        <input value={this.state.descripValue} onChange={this.descripUpdate.bind(this)} id={htm}/><br/>
        <label htmlFor={ur}>Link url:</label><br/>
        <input value={this.state.urlValue} onChange={this.urlUpdate.bind(this)} id={ur}/>
        <button onClick={this.submitHandler.bind(this)}>Add that link!</button>
      </form>
    );
  }
}

export default EnterData;
