import React, { Component } from "react";

import "./Seminar.css";
import {
  Alumni,
} from "../InfoItems/TeamMemberItems";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";


class Seminar extends Component {
  render() {
    return (
      <section className="seminar" id="seminar">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">McGill CS Systems Seminar</h1>
          </Container>
        </Jumbotron>
        <div className="seminar-wrapper">
          <div className="seminar-section">
            <span className="seminar-subtitle">Upcoming Seminars</span>

            <div className="seminar-current-description">
              Roughly bi-weekly, the McGill CS systems group is running a seminar, 
              which is open for McGill students and invited speakers to present their 
              latest work. If you would like to present, propose a speaker, or join 
              our mailing list, please get in touch at oana.balmau@cs.mcgill.ca

            </div>
          </div>

        </div>

        <span className="seminar-subtitle">Past Seminars</span>
          <div className="seminar-wrapper">
          <Table className="seminar-table">
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

export default Seminar;
