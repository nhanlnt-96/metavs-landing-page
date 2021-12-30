import React from 'react';
import {Container, Row} from "react-bootstrap";
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import {RarityScore} from "./components";

import './RarityComp.scss';

const RarityComp = () => {
  return (
    <Container className="rarity-comp comp-height">
      <Container className="rarity-comp-container">
        <RarityScore/>
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