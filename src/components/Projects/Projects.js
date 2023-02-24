import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import matchmeds from "../../Assets/Projects/matchmeds.png";
import grocerymule from "../../Assets/Projects/grocerymule.png";
import shell from "../../Assets/Projects/shell.png";
import jumper from "../../Assets/Projects/jumper.png";
import nhs from "../../Assets/Projects/nhs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My past projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocerymule}
              isBlog={false}
              title="GroceryMule "
              description="Mobile application allowing students to shop for groceries with roommmates. Make a list, add your items, and take a picture of the receipt at the end to get accurate totals. Created using Flutter and Firebase "
              ghLink="https://github.com/prafull2001/grocerymule-website"
              demoLink="https://grocerymule.net/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Unix based shell application"
              description="Unix based terminal writtern in C. Allows users to create command aliases and redirect output."
              ghLink="https://github.com/prafull2001/interactive-shell"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchmeds}
              isBlog={false}
              title="MatchMeds"
              description="Won $11,000 at 2019 Diamond Challenge. An online platform connecting patients to a network of safety-net clinics. Full stack web application written using the MERN stack."
              ghLink="https://github.com/prafull2001/matchmeds-demo-app"
              demoLink="https://diamondchallenge.org/2019/06/diamond-challenge-highlight-matchmeds/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nhs}
              isBlog={false}
              title="NHS Tutoring App"
              description="Mobile app connecting National Honor Society members to students seeking peer mentorship Written using Swift and Firebase for realtime chatroom functionality"
              ghLink="https://github.com/prafull2001/NHS-Student"
              demoLink="https://devpost.com/software/nhs-tutoring-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jumper}
              isBlog={false}
              title="JUMP3R"
              description="Simple platform jumping game"
              ghLink="https://github.com/prafull2001/NHS-Student"
              demoLink="https://devpost.com/software/nhs-tutoring-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
