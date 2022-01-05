import React from 'react';
import {Container, Row} from "react-bootstrap";
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import {RoadmapTimeline} from "./components/RoadmapTimeline";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <Row data-aos="fade-up"
             data-aos-anchor-placement="top-bottom" className="roadmap-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">Roadmap</h6>
        </Row>
        <RoadmapTimeline/>
        <Row data-aos="fade-down" className="roadmap-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;