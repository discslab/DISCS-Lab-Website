import React, { Component } from "react";
import DiscCardDeck from "../CardDeck/CardDeck.js";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Home extends Component {
  render() {
    return (
      <section className="home" id="home">
        <Jumbotron fluid className="home-jumbotron">
          <Container>
            <h1 className="home-jumbotron-title">
              {" "}
              Data Intensive Storage & Computer Systems Lab
            </h1>
            <p className="home-jumbotron-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eget libero tempor, semper erat quis, ultricies lacus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ac scelerisque metus. <br />
              <br />
              Curabitur dapibus leo eget velit aliquet, a ultricies purus
              venenatis. Donec augue ligula, tristique ac eros non, lacinia
              dapibus turpis. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto. <br />
            </p>
          </Container>
        </Jumbotron>
        <DiscCardDeck />
      </section>
    );
  }
}

export default Home;
