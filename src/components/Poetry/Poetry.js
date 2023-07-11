import React from 'react';
import { Container, Row } from "react-bootstrap";
import { Accordion, Card, Button } from 'react-bootstrap';



function Poetry() {
  return (
    <Container fluid className="about-section">
        
        <h1 style={{paddingBottom: "100px"}}>Poems by Me</h1>

        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            What's <span className="purple"> Important?</span> 
            </h2>
        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        What's more important,
                        <br></br>
                        <br></br>
                        the flower or the soil that grows it?
                        <br></br>
                        <br></br>
                        The secret you were told, 
                        <br></br>
                        <br></br>
                        or the number of people who know it?
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        The way your thoughts flow,
                        <br></br>
                        <br></br>
                        or the power to control it?
                        <br></br>
                        <br></br>
                        Native to the first world,
                        <br></br>
                        <br></br>
                        concepts like these are foreign.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            Sometimes <span className="purple"> I Dream </span> 
            </h2>
        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        Sometimes I scribble words,
                        <br></br>
                        <br></br>
                        and ask you what they mean -
                        <br></br>
                        <br></br>
                        the only time that they make sense
                        <br></br>
                        <br></br>
                        is when I fall asleep.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        For in my dreams I’m dead, 
                        <br></br>
                        <br></br>
                        hindered when I’m alive,
                        <br></br>
                        <br></br>
                        talking to souls and memories
                        <br></br>
                        <br></br>
                        for sleep is death being shy.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>



        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            Lessons from the <span className="purple"> Mahabharata </span>
            </h2>

        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        If life was a story,
                        <br></br>
                        <br></br>
                        then years are the sentences
                        <br></br>
                        <br></br>
                        enunciated by the words of everyday living.
                        <br></br>
                        <br></br>
                        And in between these words,
                        <br></br>
                        <br></br>
                        lie the letters of emotions.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Each syllable boomed
                        <br></br>
                        <br></br>
                        off the script of life.
                        <br></br>
                        <br></br>
                        My time dribbles at the chin
                        <br></br>
                        <br></br>
                        of a cosmic God,
                        <br></br>
                        <br></br>
                        expounding my Mahabharata,
                        <br></br>
                        <br></br>
                        the journey behind details and reasons.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            <span className="purple"> Morals </span> (a haiku)
            </h2>

        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        Don't preach your morals
                        <br></br>
                        <br></br>
                        til you have money to fund
                        <br></br>
                        <br></br>
                        your own temptations.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            <span className="purple"> Grandfathers </span> of the Forest
            </h2>
        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        The oaks bend and groan,
                        <br></br>
                        <br></br>
                        leaning on splintery canes as they push and sway,
                        <br></br>
                        <br></br>
                        with their torrential whooping and breezy snickering,
                        <br></br>
                        <br></br>
                        the oaks gaze below with sympathy and adoration.
                        <br></br>
                        <br></br>
                        "We have much to teach" they offer, "will you listen?"
                        <br></br>
                        <br></br>
                        But the unsuspecting pupils disappear after a summer's growth,
                        <br></br>
                        <br></br>
                        yet wiser still the oaks grow, unbothered by the neglect.
                        <br></br>
                        <br></br>
                        The soft crackling of weathered bones fills the Forest
                        <br></br>
                        <br></br>
                        as they re-extend their gracious offer to new generations.

                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h2 style={{ fontSize: "2em", textAlign: "left", paddingLeft: "40px" }}>
            The <span className="purple"> Kwisatz Haderach </span> 
            </h2>
        <Accordion defaultActiveKey="0" style={{ paddingLeft: "40px" }}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Expand to read</Accordion.Header>
                    <Accordion.Body>
                        Cinnamon-reeking flames
                        <br></br>
                        <br></br>
                        temper the sands of time
                        <br></br>
                        <br></br>
                        to make glass cages
                        <br></br>
                        <br></br>
                        for my trinocular focus
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        
    </Container>
  );
}

export default Poetry;
