import React, { Component } from "react";
import { ResearchItems } from "./ResearchItems.js";
import "./Research.css";

import Card from "react-bootstrap/Card";
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
                  {/*<span className="title">{item.title}</span>*/}
                  <Card border="dark" className="research-card-wrapper">
                    <Card.Body className="research-card-content">
                      <Card.Title className="research-card-title">
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img
                      className="research-card-image"
                      variant="top"
                      src={item.image_url}
                    />
                  </Card>
                </div>
                <div className="col">
                  <span className="list-description">{item.description}</span>
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
