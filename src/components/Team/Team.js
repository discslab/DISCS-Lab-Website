import React, { Component } from "react";
import {
  TeamLeads,
  Graduates,
  Undergraduates,
  Alumni,
} from "../InfoItems/TeamMemberItems";
import "./Team.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";

class Team extends Component {
  render() {
    return (
      <section className="team" id="team">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">TEAM</h1>
          </Container>
        </Jumbotron>
        <header className="team-title-wrapper">TEAM</header>

        <div className="section-title">FACULTY</div>
        <div className="section-wrapper">
          {TeamLeads.map((item, index) => {
            return (
              <div className="portrait-wrapper" key={index}>
                <img
                  className="portrait-image"
                  src={item.image_url}
                  alt={item.title}
                ></img>
                <span className="portrait-title">
                  <a
                    className="portrait-link text-decoration-none"
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title} &nbsp;
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </span>
                <div className="portrait-subtitle">{item.subtitle}</div>
                <div className="portrait-description">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="section-title">GRADUATE STUDENTS</div>
        <div className="section-wrapper">
          {Graduates.map((item, index) => {
            return (
              <div className="portrait-wrapper" key={index}>
                <img
                  className="portrait-image"
                  src={item.image_url}
                  alt={item.title}
                ></img>
                <span className="portrait-title">
                  <a
                    className="portrait-link"
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title} &nbsp;
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </span>
                <div className="portrait-subtitle">{item.subtitle}</div>
                <div className="portrait-description">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="section-title">UNDERGRADUATE STUDENTS</div>
        <div className="section-wrapper">
          {Undergraduates.map((item, index) => {
            return (
              <div className="portrait-wrapper" key={index}>
                <img
                  className="portrait-image"
                  src={item.image_url}
                  alt={item.title}
                ></img>
                <span className="portrait-title">
                  <a
                    className="portrait-link"
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title} &nbsp;
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </span>
                <div className="portrait-subtitle">{item.subtitle}</div>
                <div className="portrait-description">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="section-title">ALUMNI</div>
        <div className="section-wrapper">
          <Table className="section-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Project Title</th>
                <th>Position after DISCS</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {Alumni.map((item, index) => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.project}</td>
                    <td>{item.position}</td>
                    <td>
                      <a
                        className="portrait-description"
                        href={item.code_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.description}&nbsp;
                        <i class="fas fa-code-branch"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    );
  }
}

export default Team;
