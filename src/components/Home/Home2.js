import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{ paddingLeft: "10px" }}>
          
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
                Proper <span className="purple"> introductions </span>
            </h1>

            <p className="home-about-body" style={{ textAlign: "left" }}>
                I'm a SWE @ Dell Technologies working in the High Performance Computing and AI Innovations team.
                <br />
                <br />
                I graduated from the University of Wisconsin Madison recently in Spring, 2023 - Roll Badge 🦡 ⚪️🔴.
                <br />
                <br />
                I have experience developing full stack websites and mobile applications.
                I love building things that provide tangible value in people's daily lives, however small the impact.
            </p>
            
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
