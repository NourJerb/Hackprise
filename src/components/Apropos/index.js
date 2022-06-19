import React from "react";

import "../../assets/css/about.css";
import { Container, Row, Col } from "react-bootstrap";
import { Reveal, Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function index({ mobile }) {
  return (
    <>
      {mobile ? (
        <Reveal left>
          <div className="about-section">
            <div
              className="inner-container"
              style={{
                letterSpacing: "2.5px",
                lineHeight: "30px",
                textAlign: "center",
                color: "white",
              }}
            >
              <Reveal top>
                <section>
                  <div class="content">
                    <h2>Hack'Prise2.0</h2>
                    <h2>Hack'Prise2.0</h2>
                  </div>
                </section>
                <br />
                <br />
                <p>
                  A 24-hour hackathon, having 2 tracks related to the fields of
                  Data Science and aims to provide passionate and aspiring
                  engineers a platform to showcase their skills and solve
                  challenging problems.
                  <br />
                  So gear up for the race of programming and brace yourself for
                  the much awaited event where innovation will give you an extra
                  edge.
                </p>
                <br />
                <br />
                <div className="btnContainer">
                  <Link to="/about/infor" className="btn-outline">
                    Hackathon Value
                  </Link>
                  <Link to="/about/stb" className="btn-outline">
                    Hackathon Euranova
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      ) : (
        <div
          style={{ textAlign: "center", paddingTop: "6%", paddingBottom: "3%" }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Fade big>
                  <h2 className="title">À propos du Hack'Prise</h2>
                </Fade>
                <Reveal bottom>
                  <p className="description">
                    A 24-hour hackathon, having 2 tracks related to the fields
                    of Data Science and aims to provide passionate and aspiring
                    engineers a platform to showcase their skills and solve
                    challenging problems.
                    <br />
                    So gear up for the race of programming and brace yourself
                    for the much awaited event where innovation will give you an
                    extra edge.
                  </p>
                  <br />
                  <br />
                  <div className="btnContainer">
                    <Link to="/about/infor" className="btn-outline">
                      Hackathon Infor
                    </Link>
                    <Link to="/about/stb" className="btn-outline">
                      Hackathon STB
                    </Link>
                  </div>
                </Reveal>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3"></Col>

              <Col md="3" style={{ padding: "20px" }}>
                <Reveal left>
                  <img
                    width="60%"
                    alt="..."
                    src={
                      require("../../assets/img/logo/EJE + Text.png").default
                    }
                  />
                </Reveal>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
