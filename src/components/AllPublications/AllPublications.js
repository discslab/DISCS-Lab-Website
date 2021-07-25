import React, { Component } from "react";
import "./AllPublications.css";
import { AllPublicationItems } from "../InfoItems/PublicationItems";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

class AllPublications extends Component {
  render() {
    return (
      <section className="all_publications" id="all_publications">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">All Publications</h1>
          </Container>
        </Jumbotron>
        <Table className="section-table">
          <tbody>
            {AllPublicationItems.map((item, index) => {
              return (
                <tr>
                  <td>
                    <div className="conference-section">
                      {" "}
                      <span className="conference-badge">
                        {item.conference}
                      </span>
                      {item.award ? (
                        <span className="award-badge">{item.award}</span>
                      ) : null}
                      <span className="widget">
                        <span className="first-half">
                          <i class="far fa-star"></i>Star
                        </span>
                        <span className="second-half">{item.stars}</span>
                      </span>
                    </div>
                    <br />
                    <b>{item.title}</b>
                    <br />
                    {item.tags.map((tag, ID) => {
                      return (
                        <div className="badge" key={ID}>
                          <a href={tag.link} target="_blank" rel="noreferrer">
                            {tag.subtitle}
                          </a>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
    );
  }
}

export default AllPublications;
