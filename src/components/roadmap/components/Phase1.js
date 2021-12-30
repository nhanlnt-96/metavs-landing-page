import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {roadmapPhase1Data} from "../../../configs/roadmapPhase1Data";
import Img1 from '../../../assets/imgs/roadmapPhase1Img1.jpeg'
import Img2 from '../../../assets/imgs/roadmapPhase1Img2.jpeg'
import Img3 from '../../../assets/imgs/roadmapPhase1Img3.jpeg'
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from "../../../assets/gifs/scrollDown.gif";

export const Phase1 = () => {
  return (
    <Row className="roadmap-comp-phase-1">
      <Container fluid className="phase-1-container">
        <Row className="phase-1-title">
          <Col xl={6} lg={5} md={4} sm={12}/>
          <Col xl={6} lg={7} md={8} sm={12} className="phase-1-title-item">
            <div className="roadmap-comp-content-header d-flex flex-column justify-content-center align-items-center">
              <div className="content-phase-number d-flex justify-content-center align-items-center">
                <h6 className="number-item">1</h6>
              </div>
              <div className="content-phase-title">
                <h6 className="title-item">METAMEN NFT</h6>
                <h6 className="title-item">COLLECTION</h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="phase-1-content">
          <Col xl={6} lg={5} md={4} sm={12} className="content-img d-flex justify-content-center align-items-center">
            <Row className="content-img-container">
              <Col className="img-left-side">
                <img src={Img1} alt="roadmap-phase-1"/>
                <img src={Img2} alt="roadmap-phase-1"/>
              </Col>
              <Col className="img-right-side">
                <img src={Img3} alt="roadmap-phase-1"/>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={7} md={8} sm={12}
               className="content-detail d-flex justify-content-center align-items-center">
            <div className="content-desc comp-border-neon-shadow">
              {
                roadmapPhase1Data.map((val, index) => (
                  <p key={index} className="item comp-content-box">{val}</p>
                ))
              }
            </div>
          </Col>
        </Row>
        <Row className="phase-1-btn">
          <Col xl={6} lg={5} md={4} sm={12}/>
          <Col xl={6} lg={7} md={8} sm={12} className="d-flex justify-content-center align-items-center">
            <button className="comp-primary-btn">SHOW MORE
              <BiRightArrowAlt className="comp-primary-btn-icon"/>
            </button>
          </Col>
        </Row>
        <Row className="phase-scroll-down d-flex justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Row>
  )
}