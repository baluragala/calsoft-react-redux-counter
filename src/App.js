import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { INC, DEC } from "./actionTypes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.inc}>INC</button>
        <span>{this.props.ctr}</span>
        <button onClick={this.props.dec}>DEC</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ctr: state.counter,
    another: state.another
  };
}
function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch({ type: INC }),
    dec: () => dispatch({ type: DEC })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
