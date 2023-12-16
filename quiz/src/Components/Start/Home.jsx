import React, { Component } from "react";
import '../../../src/App.css'

export default class Home extends Component {
  render() {
    return (
        <>
        <div className="start-parent">
            <div className="start-main">
            <div className="start-heading">
                Quiz App
            </div>
            <button>Play</button>
            </div>
        </div>
        </>
    );
  }
}