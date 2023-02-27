import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
  <Container className="home-content" style={{ textAlign: "center" }}>
    <Row>
      <Col md={7} className="home-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hey There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name">
          I'm Prafull.
        </h1>
      </Col>

      <Col md={5} className="d-flex justify-content-center mt-md-0 mt-md-3">
        <img
          src={homeLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "300px", borderRadius: "50px" }}
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
