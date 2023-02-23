import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My passion for computer science started with my love of video games.
            <br />I played them so often, I decided to found a videogame development club at my highschool where we released 2 games on the iOS Appstore.
            <br />
            <br />
            Since then, I've worked on a lot of interesting projects in areas such as <span className="purple">cloud</span>, <span className="purple">healthcare</span>, <span className="purple">neurosurgery</span>, and <span className="purple">commerce</span>.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
