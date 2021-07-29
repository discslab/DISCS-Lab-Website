import React, { Component } from "react";
import "./Publications.css";

import { FeaturedPublications } from "../InfoItems/PublicationItems";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

class Publications extends Component {
  render() {
    return (
      <section className="publications" id="publications">
        <Jumbotron fluid>
          <Container>
            <h1 className="jumbo-title">Selected Publications</h1>
          </Container>
        </Jumbotron>
        <Table className="section-table">
          <tbody>
            {FeaturedPublications.map((item, index) => {
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
            <tr>
              <td>
                <div className="conference-end">
                  <a href="/all_publications">Full Publication List</a>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    );
  }
}

export default Publications;
