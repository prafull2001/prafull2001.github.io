import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Since I was a kid, I have  enjoyed finding ways to give back to my community. For me, I started by learning JavaScript in 7th grade to create an app for an animal shelter in my township.
          <br />
          <br />
            After a few months of coding, I was featured in a local newspaper for my work & was thrilled by the positive impact the app had on the staff.
            <br />
            <br />
            I’ve been pursuing that sensation ever since which has driven me to develop  applications tackling issues I'm connected with, particularly in fields like Medicare and finance.
            <br />
            <br />
            
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
