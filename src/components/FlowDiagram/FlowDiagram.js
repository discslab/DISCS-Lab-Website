import React, { Component } from "react";
import "./FlowDiagram.css";

class FlowDiagram extends Component {
  render() {
    return (
      <div className="orgchart">
        <div className="nodecontent">
          <span className="inner-node"></span>
        </div>
        <ul className="leaves">
          <li className="leaf1" onClick={this.handleClick1}>
            <span className="leaf-title">Storage Systems for Data Science</span>
            <span className="leaf-image1"></span>
          </li>
          <li className="leaf2" onClick={this.handleClick2}>
            <span className="leaf-title">
              Data Management for the Internet of Things
            </span>
            <span className="leaf-image2"></span>
          </li>
          <li className="leaf3">
            <span className="leaf-title">
              Reimagining Storage Building Blocks for Fast Devices
            </span>
            <span className="leaf-image3"></span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FlowDiagram;
