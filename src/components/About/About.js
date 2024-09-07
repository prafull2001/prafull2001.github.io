import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import abtImg from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";
import Type from "./Type";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2em" }}>
            <div style={{ padding: 15, textAlign: "left", display: "flex", alignItems: "center" }}>
              <span style={{ display: "inline", marginRight: "5px" }}>I am a</span>
              <Type style={{ display: "inline" }} />
            </div>
          </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={abtImg} alt="about" className="img-fluid" style={{ maxHeight: "450px", borderRadius: "50px" }} />
          </Col>
        </Row>
        

        <h1 className="project-heading">
          <strong className="purple">Technologies</strong> I know
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
