import React, { Component } from "react";
import "./Teachings.css";
import { TeachingsItems } from "../InfoItems/TeachingsItems";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Teachings extends Component {
  render() {
    return (
      <section className="teachings" id="teachings">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">TEACHING</h1>
          </Container>
        </Jumbotron>
        <div className="teachings-content-sidebar">
          {Object.keys(TeachingsItems).map((semester, index) => {
            return (
              <React.Fragment>
                <div className="col">
                  <span className="teachings-title">{semester}</span>
                </div>

                <div className="col">
                  {TeachingsItems[semester].map((item, index2) => {
                    return (
                      <div className="teachings-class-section">
                        <span className="teachings-list-course">
                          {item.course}
                        </span>
                        <span className="teachings-list-section">
                          <div className="teachings-list-subtitle">
                            <i class="fas fa-book-open"></i> Overview
                          </div>{" "}
                          {item.overview}
                        </span>
                        <span className="teachings-list-section">
                          <div className="teachings-list-subtitle">
                            <i class="fas fa-user-circle"></i> Instructors
                          </div>{" "}
                          <span className="teachings-instructors">
                            {item.instructors.map((instr, count) => {
                              return (
                                <a
                                  href={instr.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    className="instr-btns"
                                    variant="outline-success"
                                  >
                                    {instr.name}
                                  </Button>
                                </a>
                              );
                            })}
                          </span>
                        </span>
                        <span className="teachings-list-section">
                          <div className="teachings-list-subtitle">
                            <i class="fas fa-exclamation-triangle"></i>{" "}
                            Prerequisites
                          </div>{" "}
                          <span className="teachings-prerequisites">
                            {item.prerequisites.map((prereq, count) => {
                              let no_prereqs = prereq.toLowerCase() !== "none";
                              return (
                                <a
                                  className={
                                    no_prereqs ? "prereq-btns" : "none-btn"
                                  }
                                  href={
                                    no_prereqs
                                      ? `https://www.mcgill.ca/study/${new Date().getFullYear()}-${
                                          new Date().getFullYear() + 1
                                        }/courses/${prereq
                                          .slice(0, 4)
                                          .toLowerCase()}-${prereq.slice(5, 8)}`
                                      : ""
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    className={
                                      no_prereqs ? "prereq-btns" : "none-btn"
                                    }
                                    variant="outline-danger"
                                  >
                                    {prereq}
                                  </Button>
                                </a>
                              );
                            })}
                          </span>
                        </span>
                        <span className="teachings-list-section">
                          <div className="teachings-list-subtitle">
                            <i class="fas fa-clipboard"></i> Notes
                          </div>
                          {item.notes}

                          <div className="teachings-syllabus">
                            <a href={item.syllabus}>Syllabus</a>
                          </div>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Teachings;
