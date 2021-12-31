import React from 'react';
import {Container, Row} from "react-bootstrap";
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import {RarityScore, RarityTimeline} from "./components";

import './RarityComp.scss';

const RarityComp = () => {
  return (
    <Container fluid className="rarity-comp comp-height">
      <Container className="rarity-comp-container">
        <Row className="rarity-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">Rarity</h6>
        </Row>
        <RarityScore/>
        <Row className="rarity-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
        <RarityTimeline/>
        <Row className="rarity-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default RarityComp;