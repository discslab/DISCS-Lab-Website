import React, { Component } from "react";

import "./Openings.css";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Openings extends Component {
  render() {
    return (
      <section className="openings" id="openings">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">PhD/MSc/UG OPENINGS</h1>
          </Container>
        </Jumbotron>
        <div className="openings-wrapper">
          <div className="openings-section">
            <span className="openings-subtitle">Current Openings</span>
            <Alert
              className="application-alert"
              id="application-alert-success"
              variant="success"
            >
              <i class="fas fa-check-circle" id="alert-circle" />
              <p className="current-available">
                We have fully funded positions and are currently looking for
                &nbsp;
                <b>PhD students!</b> <br />
                <b>Masters and undergraduate students</b> are also welcome for
                research projects.
              </p>
            </Alert>
            <div className="openings-current-description">
              I love working with students and I am always looking for
              motivated, curious, and hardworking undergraduate, Master’s, and
              PhD students to join DISCS. Before applying formally, feel free to
              contact me by email. I read all email I receive from prospective
              students.
              <br />
              <br />
              Before writing to me, do keep in mind that I receive a lot of
              email from students interested in applying to McGill. If you would
              like to get a response, please read the following and send me the
              information I request.
              <br />
              <br />
              If you are applying to our <b>graduate</b> programs (PhD and
              Master’s), you should also be aware of the following:
              <ul className="topic-list">
                <li className="topic-list-item">
                  Students are admitted by the department, not by individual
                  faculty.
                </li>
                <li className="topic-list-item">
                  The department begins reviewing applications in January for
                  the following academic year. <b>The application deadline for
                  international students requiring financial support is December
                  15.</b>{" "}
                </li>
                <li className="topic-list-item">
                  You cannot be admitted if you do not submit a complete
                  application.{" "}
                </li>
                <li className="topic-list-item">
                  Even if I believe that you are well-suited for my group, I
                  cannot guarantee that you will be admitted, although I can
                  make a recommendation for you to the admissions committee.
                </li>
                <li className="topic-list-item">
                  More information on the admissions process in the McGill
                  School of Computer Science can be found{" "}
                  <a
                    href="https://www.cs.mcgill.ca/academic/graduate/admission/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="openings-section">
            <span className="openings-subtitle">Application</span>
            <div className="openings-current-description">
              <b>
                If you are interested in working with me, please do the
                following:
              </b>
              <ul className="topic-list">
                <li className="topic-list-item">
                  Visit the DISCS <a href="/#research">Research</a> and{" "}
                  <a href="/all_publications">Publications</a> pages. Skim
                  through the titles and abstracts to get a sense of the kind of
                  work the group is doing. Please spend enough time doing this
                  to determine the areas in which I conduct research.{" "}
                  <b>I am a systems person. </b>I cannot advise students in
                  areas in which I do not have expertise. If you do not hear
                  back from me, you did not convince me that your research
                  interests are aligned with mine.
                </li>
                <li className="topic-list-item">
                  If our interests seem genuinely aligned, find one paper that
                  looks particularly interesting and read it.
                </li>
                <li className="topic-list-item">
                  If you are still interested, then send me email including the
                  area(s) in which you are interested in working, the background
                  you are bringing to the area (for undergrads this part is less
                  important), and which paper you read. For the paper you read,
                  explain why you chose to read it, what you learned from
                  reading it, and what about it convinced you that I would be a
                  good research fit for you.
                </li>
              </ul>
            </div>
            <div className="openings-app-section">
              <span className="openings-app-subtitle">
                Information for PhD Students
              </span>
              <div className="openings-current-description">
                <b>
                  In addition to what I asked above, please do the following:
                </b>
                <ul className="topic-list">
                  <li className="topic-list-item">
                    Please include a summary of your prior research experience.
                  </li>
                  <li className="topic-list-item">
                    If you are applying with an MSc degree, please tell me
                    whether your Master’s program was research-oriented; if so,
                    provide a 1-paragraph summary of your Master's thesis.
                  </li>
                  <li className="topic-list-item">
                    If you are applying directly from an undergraduate program,
                    please send copy of your CV/resume and transcript and tell
                    me what research experience you have had.
                  </li>
                  <li className="topic-list-item">
                    Please include a summary of your programming experience. I
                    am looking for strong programming skills (especially in
                    C/C++) and good knowledge of Linux/Unix.
                  </li>
                  <li className="topic-list-item">
                    If you have worked in industry (full-time, internships,
                    etc.), please include a summary of your experience and
                    contributions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="openings-app-section">
              <span className="openings-app-subtitle">
                Information for MSc Students
              </span>
              <div className="openings-current-description">
                <ul className="topic-list">
                  <li className="topic-list-item">
                    Please include your resume/CV and undergraduate transcript.
                  </li>
                  <li className="topic-list-item">
                    Please tell me what your goal is in earning a Master's
                    degree.
                  </li>
                  <li className="topic-list-item">
                    Please tell me what research experience you've had.
                  </li>
                  <li className="topic-list-item">
                    Please include a summary of your programming experience. I
                    am looking for strong programming skills (especially in
                    C/C++) and good knowledge of Linux/Unix.
                  </li>
                </ul>
              </div>
            </div>
            <div className="openings-app-section">
              <span className="openings-app-subtitle">
                Information for Undergraduate Students
              </span>
              <div className="openings-current-description">
                <ul className="topic-list">
                  <li className="topic-list-item">
                    Please include your resume/CV and undergraduate transcript.
                  </li>
                  <li className="topic-list-item">
                    Please consider taking COMP-310, as it provides important
                    background for the research projects conducted in DISCS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Openings;
