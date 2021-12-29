import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp">
      <Container className="roadmap-comp-container">
      <Row className="roadmap-comp-phase-1">
        <Col className="phase-1-img"></Col>
        <Col className="phase-1-content">
          <div className="content-header"></div>
          <div className="content-desc border-neon-shadow">
          
          </div>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;