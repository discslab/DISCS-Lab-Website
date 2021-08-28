import React, { Component } from "react";
import { Link } from "react-router-dom";

import DiscCardDeck from "../CardDeck/CardDeck.js";
import "./Home.css";
import { TypedItems } from "./TypedItems.js";

import Button from "react-bootstrap/Button";
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
                speed={10}
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
              DISCS lab is a research group in the{" "}
              <a
                href="https://www.cs.mcgill.ca/"
                target="_blank"
                rel="noreferrer"
              >
                School of Computer Science
              </a>{" "}
              at McGill University, led by{" "}
              <a
                href="https://www.cs.mcgill.ca/~balmau/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Oana Balmau
              </a>
              . DISCS centers around efficient storage systems. Our goal is to
              understand how new storage technologies (persistent memory, NVMe
              drives, RDMA) will impact the future of computer systems and shape
              future data-intensive applications, such as data science
              applications and edge computing.
              <br />
              <br />
              An important part of the DISCS vision is training future
              researchers that can recognize the full-system impact of new
              technologies. We are a diverse group and are always looking to
              recruit talented and motivated students. We have several fully
              funded open positions for PhD students.
            </p>
            <Link to="/openings">
              <Button className="join-button" variant="outlined-primary">
                Join us!
              </Button>
            </Link>
          </Container>
        </Jumbotron>
        <DiscCardDeck />
      </section>
    );
  }
}

export default Home;
