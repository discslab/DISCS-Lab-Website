import React, { Component } from "react";
import { ResearchItems } from "../InfoItems/ResearchItems";
import "./Research.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Research extends Component {
  render() {
    return (
      <section className="research" id="research">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">RESEARCH</h1>
          </Container>
        </Jumbotron>
        <div className="content-sidebar">
          {ResearchItems.map((item, index) => {
            return (
              <React.Fragment>
                <div className="col" id={item.research_id}>
                  <span className="title">{item.title}</span>
                </div>
                <div className="col">
                  <span className="list-subtitle">
                    <i className={item.icon1} /> {item.subtitle1}
                  </span>
                  <span className="list-context">{item.context}</span>
                  <span className="list-subtitle">
                    <i className={item.icon2} /> {item.subtitle2}
                  </span>
                  <span className="list-direction">{item.direction}</span>
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
