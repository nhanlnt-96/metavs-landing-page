import React from 'react';
import {Container} from "react-bootstrap";
import {Phase1, Phase2} from "./components";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <Phase1/>
        <Phase2/>
      </Container>
    </Container>
  );
};

export default RoadmapComp;