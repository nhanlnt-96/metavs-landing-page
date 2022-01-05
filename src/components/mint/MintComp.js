import React from 'react';
import {Container, Row} from "react-bootstrap";

import './MintComp.scss';
import LeftSideButton from "./components/LeftSideButton";
import RightSideButton from "./components/RightSideButton";

const MintComp = () => {
  return (
    <Container fluid className="mint-comp">
      <Container className="mint-comp-container">
        <Row data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             className="mint-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">Mint</h6>
        </Row>
        <Row className="mint-comp-content d-grid">
          <div data-aos="fade-right" className="mint-left-side d-flex justify-content-center align-items-center">
            <LeftSideButton/>
          </div>
          <div data-aos="fade-left" className="mint-right-side d-flex justify-content-center align-items-center">
            <RightSideButton/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default MintComp;