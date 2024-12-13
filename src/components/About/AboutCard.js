import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dheerendra kumar </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br />
            I am currently working as a Graphic Designer .
            <br />
            I have completed 9 years in   (Pharma company) as a Designer .
            <br />
            <br />
            Apart from Designs, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> creativity 
            </li>
            <li className="about-activity">
              <ImPointRight /> Passionate to my work
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creativity is just connecting things!"{" "}
          </p>
          <footer className="blockquote-footer">Dheerendra kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
