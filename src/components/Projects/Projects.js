import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import matchmeds from "../../Assets/Projects/matchmeds.png";
import grocerymule from "../../Assets/Projects/grocerymule.png";
import shell from "../../Assets/Projects/shell.png";
import jumper from "../../Assets/Projects/jumper.png";
import nhs from "../../Assets/Projects/nhs.png";
import save from "../../Assets/Projects/save.png";
import stem from "../../Assets/Projects/stemplayer.jpg"

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
              imgPath={stem}
              isBlog={false}
              title="Stem Player"
              description= "A fun toy I put together over a weekend. Created a music stem/DJ device. Separates vocals, drums, bass and melody from any uploaded audio and maps them to 4 force sensitive resistors activated by pressure from fingers, making for endless amateur DJ fun (at least for me!)"
              ghLink="https://github.com/prafull2001/stem-glove"
              demoLink="https://www.youtube.com/watch?v=b77IK56quzs&ab_channel=PrafullSharma"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocerymule}
              isBlog={false}
              title="GroceryMule "
              description= "Doing groceries for my roommates and I became frustrating, so some friends and I made an app to do the boring stuff for us. GroceryMule allows you to make collaborative shopping lists and conveniently request payments from others by taking a picture of your receipt. Created using Flutter and Firebase "
              ghLink="https://github.com/prafull2001/grocerymule-website"
              demoLink="https://grocerymule.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Unix based shell"
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
              description="After reading about a young man who died rationing his insulin due to soaring healthcare prices, I was inspired to help democratize affordable healthcare solutions to those who don't qualify for traditional healthcare plans. MatchMeds is an online platform connecting patients to a network of safety-net clinics that provide prescriptions on sliding-fee scales.  Won $11,000 at 2019 Diamond Challenge.  Full stack web application written using the MERN stack."
              ghLink="https://github.com/prafull2001/matchmeds-demo-app"
              demoLink="https://vimeo.com/344841700?embedded=true&source=vimeo_logo&owner=14723230"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nhs}
              isBlog={false}
              title="NHS Tutoring App"
              description="In high school, I reached out to the National Honor Society to prepare for a calculus test. Unfortunately, the sign-up process was disorganized & I received a delayed response. Realizing the need for a better way for students to access the support they require, I developed an iPhone app streamlining the sign-up process. The app provided students direct access to their tutors via a chatroom function, ensuring seamless communication. Written using Swift and Firebase."
              ghLink="https://github.com/prafull2001/NHS-Student"
              demoLink="https://devpost.com/software/nhs-tutoring-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jumper}
              isBlog={false}
              title="JUMP3R"
              description="One of my first ever apps published on the iOS Appstore! A simple 2D platformer jumping game, JUMP3R recieved over 5,000 downloads worldwide with no advertisement. Written in the Corona Labs game engine using Lua."
              ghLink="https://github.com/ByteMeClub/Jumper"
              demoLink="https://appadvice.com/app/jump3r/1212154687"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={save}
              isBlog={false}
              title="S.A.V.E. Mobile App"
              description="An app for SAVE Animal Shelter located in Montgomery, NJ, to make the process of adopting pets, volunteering, and donating more efficient and convenient."
              ghLink="https://github.com/codeforprinceton/savePets"
              // demoLink="https://devpost.com/software/nhs-tutoring-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
