import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { DeckItems } from "./DeckItems.js";

import "./CardDeck.css";

class DiscCardDeck extends Component {
  render() {
    return (
      <CardDeck className="card-container">
        {DeckItems.map((item, index) => {
          return (
            <Card className="card-wrapper shadow" key={index}>
              <Card.Img
                className="card-image"
                variant="top"
                src={item.image_url}
              />

              <Card.Body className="card-content">
                <Card.Link href={item.target}>{item.title}</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

export default DiscCardDeck;
