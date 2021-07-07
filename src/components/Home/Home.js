import React, { Component } from "react";
import DiscCardDeck from "../CardDeck/CardDeck.js";
import "./Home.css";
import { TypedItems } from "./TypedItems.js";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typing from "react-typing-animation";

class Home extends Component {
  render() {
    return (
      <section className="home" id="home">
        <Jumbotron fluid className="home-jumbotron">
          <Container>
            <h1 className="home-jumbotron-title">
              Data Intensive Storage & Computer Systems Lab
            </h1>
            <div className="home-jumbotron-tag-wrapper">
              <p className="home-jumbotron-tagline">Here, we </p>

              <Typing
                className="home-jumbotron-animation"
                loop={true}
                speed={50}
              >
                {TypedItems.map((item, index) => {
                  return (
                    <>
                      <span
                        style={{
                          color: "#168CE2",
                        }}
                      >
                        {item.text}
                      </span>
                      <Typing.Backspace
                        count={item.text.length + 4}
                        delay={3000}
                      />
                    </>
                  );
                })}
              </Typing>
            </div>
            <p className="home-jumbotron-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
              <br /> <br />
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
