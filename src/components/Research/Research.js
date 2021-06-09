import React, { Component } from "react";
import { ResearchItems } from "./ResearchItems.js";
import "./Research.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Research extends Component {
  render() {
    return (
      <section className="research" id="research">
        <Jumbotron>
          <Container fluid>
            <h1 className="jumbo-title">RESEARCH</h1>
          </Container>
        </Jumbotron>
        <div className="content-sidebar">
          {ResearchItems.map((item, index) => {
            return (
              <React.Fragment>
                <div className="col" id={item.id}>
                  <span className="title">{item.title}</span>
                </div>
                <div className="col">
                  <span className="list-subtitle">
                    <i className={item.icon1} /> {item.subtitle1}
                  </span>
                  <span className="list-description">{item.description}</span>
                  <span className="list-subtitle">
                    <i className={item.icon2} /> {item.subtitle2}
                  </span>
                  <span className="list-direction">{item.direction}</span>
                  {/*<div className="list-keywords">
                    {item.keywords.map((word, index) => {
                      return <span className="keyword">{word}</span>;
                    })}
                  </div>*/}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Research;
