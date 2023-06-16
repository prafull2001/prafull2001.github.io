import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from 'react-router-dom';

import {
  SiSpotify,
  SiGmail,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{ textAlign: "center" }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey! I'm Prafull.{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <Link to="/poetry" className="purple" style={{textDecoration: 'none', fontSize: '1.25em'}}>I write poetry</Link> when I'm inspired & to express myself.
              </h1>

              <a href="mailto:prafull2001@gmail.com"
                target="_blank" 
                rel="noopener noreferrer" style={{ color: "white" }}
              >
                <SiGmail className="contact-icons"/>
              </a>

           
              <a href="https://open.spotify.com/user/prafull2001"
                target="_blank" 
                rel="noopener noreferrer" style={{ color: "white" }}
              >
                <SiSpotify className="contact-icons"/>
              </a>
              <a href="https://www.linkedin.com/in/prafull-sharma-363187168/"
                target="_blank" 
                rel="noopener noreferrer" style={{ color: "white" }}
              >
                <SiLinkedin className="contact-icons"/>
              </a>
              <a href="https://github.com/prafull2001"
                target="_blank" 
                rel="noopener noreferrer" style={{ color: "white" }}
              >
                <SiGithub className="contact-icons"/>
              </a>
              
              
            </Col>

            <Col md={5} className="d-flex justify-content-center mt-md-0 mt-md-3">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "50px" }}
              />
            </Col>
          </Row>
        </Container>
        

        <Home2 />
        
      </Container>
    </section>
  );
}

export default Home;
