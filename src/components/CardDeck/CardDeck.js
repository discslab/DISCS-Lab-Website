import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { ResearchItems } from "../InfoItems/ResearchItems";

import "./CardDeck.css";

class DiscCardDeck extends Component {
  render() {
    return (
      <CardDeck className="card-container">
        {ResearchItems.slice(1).map((item, index) => {
          return (
            <a href={item.target}>
              <Card
                id={item.home_id}
                className="card-wrapper shadow"
                key={index}
              >
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={item.image_url}
                />

                <Card.Body className="card-content">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="card-text">{item.tagline}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          );
        })}
      </CardDeck>
    );
  }
}

export default DiscCardDeck;
