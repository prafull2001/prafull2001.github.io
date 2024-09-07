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
                I'm a SWE at Dell Technologies living in the SF Bay Area.
                <br />
                <br />
                I am passionate about building things that provide tangible value in people's daily lives, however small the impact.
                <br />
                <br />
                I am a certified <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/805b30c61c894f59a731ccb9775c1eaf" target="_blank" rel="noopener noreferrer" className="purple">AWS Developer Associate</a>.
                <br />
                <br />
                In my freetime I enjoy lifting weights, playing pickleball, hiking and adding to my growing vinyl collection. 
            </p>
            
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
