import React, { Component } from "react";

import "./Seminar.css";
import {
  Speakers,
} from "../InfoItems/SeminarSpeakerItems";
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
              our mailing list, please get in touch.
              <br />
              <b>Update:</b> We are currently looking for speakers for the Winter 22 term. Are you a McGill (undergraduate or graduate) student? Do you have a compelling systems project you'd like to present? Or an idea that is still brewing on which you'd like to get feedback? Then you are a great match for a seminar speaker – don't hesitate to get in touch! 
              <br />
              Contact: oana.balmau@cs.mcgill.ca

            </div>
          </div>

        </div>

        <div className="seminar-wrapper">
          <div className="seminar-section">
          <span className="seminar-subtitle">Past Seminars</span>
            <div className="seminar-wrapper">
            <Table className="seminar-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Speaker</th>
                  <th>Talk Title</th>
                  <th>Slides</th>
                </tr>
              </thead>
              <tbody>
                {Speakers.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                      <td>{item.talk}</td>
                      <td>
                        <a
                          className="portrait-description"
                          href={item.slides}
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

        </div>
      </div>

      </section>

    );
  }
}

export default Seminar;
