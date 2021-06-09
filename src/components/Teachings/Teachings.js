import React, { Component } from "react";
import "./Teachings.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Teachings extends Component {
  render() {
    return (
      <section className="teachings" id="teachings">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">TEACHINGS</h1>
          </Container>
        </Jumbotron>
        Padding - Shorthand Property To shorten the code, it is possible to
        specify all the padding properties in one property. The padding property
        is a shorthand property for the following individual padding properties:
        padding-top padding-right padding-bottom padding-left So, here is how it
        works: If the padding property has four values: padding: 25px 50px 75px
        100px; top padding is 25px right padding is 50px bottom padding is 75px
        left padding is 100px Example Use the padding shorthand property with
        four values: operty has three values: padding: 25px 50px 75px; top
        padding is 25px right and left paddings are 50px bottom padding is 75px
        Example Use the padding shorthand property with three values:
      </section>
    );
  }
}

export default Teachings;
