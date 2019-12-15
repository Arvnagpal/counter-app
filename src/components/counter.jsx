import React, { Component } from 'react';

class Counter extends Component {
state = {
  count: 0
};
handleIncrement = product => {
  console.log(product);
  this.setState({count: this.state.count + 1})
};

  render() {
    return (
      <div className="m-1">
        <span className="m-2">{this.formatCount()}</span>
        <button onClick={ () => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Chak</button>
      </div>
    );
  }
formatCount(){
  return this.state.count === 0 ? 'ZERO' : this.state.count;
 }
}

export default Counter;
