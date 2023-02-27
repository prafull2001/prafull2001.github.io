import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import grocerymule from "../../Assets/Blogs/grocerymule.png";
import lmnd from "../../Assets/Blogs/lmnd.png";
import coursera from "../../Assets/Blogs/coursera.png";
import palantir from "../../Assets/Blogs/palantir.png";
import tencent from "../../Assets/Blogs/tencent.png";


function Blogs () {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My recent blogs
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={grocerymule}
              isBlog={false}
              title="From The Ground Up - Version Control "
              description="Welcome to the second installment of 'From The Ground Up'! In this article I wanted to share a little bit about how we use Github for GroceryMule and how a good Git-flow is important for any project's success."
              ghLink="https://www.linkedin.com/pulse/from-ground-up-version-control-prafull-sharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={grocerymule}
              isBlog={false}
              title="From The Ground Up - Data Modeling"
              description="Welcome to the first installment of 'From the Ground Up'! In this series, I'll be talking about some of the things that I've learned creating GroceryMule - a mobile app that streamlines the group shopping experience for college students - with my two friends and partners, Dhruv Jain and Harry Wang."
              ghLink="https://www.linkedin.com/pulse/from-ground-up-data-modeling-prafull-sharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={lmnd}
              isBlog={false}
              title="Investing in the Familiar - Lemonade"
              description="This is the 4th installment in my investing blog where I talk about companies with long term potential growth. Lemonade is a young tech-based insurance company disrupting the insurance industry."
              ghLink="https://www.linkedin.com/pulse/investing-familiar-lemonade-prafull-sharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={coursera}
              isBlog={false}
              title="Investing in the Familiar - Coursera"
              description="This is the third installment in my investments series. This time I'll be talking about Coursera and what my thoughts are on its future."
              ghLink="https://www.linkedin.com/pulse/investing-familiar-coursera-prafull-sharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={palantir}
              isBlog={false}
              title="Investing in the Familiar - Palantir"
              description="This is my the second installment in my investing blog. This time I'll be talking about Palantir and what my thoughts are on its future."
              ghLink="https://www.linkedin.com/pulse/investing-familiar-palantir-prafull-sharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={tencent}
              isBlog={false}
              title="Investing in the Familiar - Tencent"
              description="This is the first installment of my investing blog 'Investing In The Familiar' where I pick an interesting company and break down areas of growth and business potential. Today, we'll be taking a look at Tencent!"
              ghLink="https://www.linkedin.com/pulse/investing-familiar-tencent-prafull-sharma"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
