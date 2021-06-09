import React, { Component } from "react";
import "./News.css";
import NewsCarousel from "../NewsCarousel/NewsCarousel.js";
import { NewsIconItems } from "../InfoItems/NewsIconItems";
import { NewsDisplayItems } from "../InfoItems/NewsDisplayItems";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_year: new Date().getFullYear(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      active: this.state.display_year,
      content: this.renderContent(),
    });
  }

  handleClick = (year) => {
    this.setState(
      {
        display_year: year,
      },
      () => {
        this.setState({
          active: year,
          content: this.renderContent(),
        });
      }
    );
  };

  renderButton(year, index) {
    return (
      <Button
        className={this.state.active === year ? "active" : ""}
        key={index}
        variant="outline-primary"
        onClick={() => this.handleClick(year)}
      >
        {year}
      </Button>
    );
  }

  renderContent() {
    return (
      <ListGroup className="new-list" variant="flush">
        {NewsDisplayItems[this.state.display_year].map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              <b>
                {NewsIconItems[item.type]} [{item.month}]
              </b>{" "}
              {item.content}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }

  render() {
    return (
      <section className="news" id="news">
        <Jumbotron>
          <Container fluid>
            <h1 className="jumbo-title">NEWS</h1>
          </Container>
        </Jumbotron>
        <header className="news-title-wrapper">NEWS</header>
        <div className="news-display-wrapper">
          <NewsCarousel />
        </div>
        <div className="news-info-wrapper">
          <div className="news-year-wrapper">
            <ul className="news-year-list">
              {Object.keys(NewsDisplayItems)
                .reverse()
                .map((year, index) => {
                  return this.renderButton(year, index);
                })}
            </ul>
          </div>
          <div className="news-info">{this.state.content}</div>
        </div>
      </section>
    );
  }
}

export default News;
