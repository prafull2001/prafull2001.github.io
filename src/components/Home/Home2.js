import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
        
          <h1 style={{ fontSize: "2.6em" }}>
              Proper <span className="purple"> introductions </span>
          </h1>

            <p className="home-about-body">
              I'm a senior at UW Madison graduating in Computer Science.
              <br />
              <br />
              I have experience developing full stack websites and mobile applications.
              <br />
            </p>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
