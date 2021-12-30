import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Img1 from "../../../assets/imgs/roadmapPhase3Img1.jpeg";
import Img2 from "../../../assets/imgs/roadmapPhase3Img2.jpeg";
import Img3 from "../../../assets/imgs/roadmapPhase3Img3.jpeg";
import {roadmapPhase3Data} from "../../../configs/roadmapPhase3Data";
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from "../../../assets/gifs/scrollDown.gif";

export const Phase3 = () => {
  return (
    <Row className="roadmap-comp-phase-3">
      <Container fluid className="phase-two-col-container phase-1-container">
        <Row className="phase-3-title">
          <Col xl={6} lg={5} md={12} sm={12}/>
          <Col xl={6} lg={7} md={12} sm={12} className="phase-3-title-item">
            <div className="roadmap-comp-content-header d-flex flex-column justify-content-center align-items-center">
              <div className="content-phase-number d-flex justify-content-center align-items-center">
                <h6 className="number-item">3</h6>
              </div>
              <div className="content-phase-title">
                <h6 className="title-item">MetaWomen Avatar</h6>
                <h6 className="title-item">NFT Collection and</h6>
                <h6 className="title-item">MetaVS MMORPG</h6>
                <h6 className="title-item">play-to-earn game</h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="phase-two-col-content">
          <Col xl={6} lg={5} md={12} sm={12} className="content-img d-flex justify-content-center align-items-center">
            <Row className="content-img-container">
              <Col className="img-top-side d-flex justify-content-center align-items-center">
                <div className="img-item d-flex justify-content-center align-items-center">
                  <div className="img">
                    <img src={Img1} alt="roadmap-phase-3"/>
                  </div>
                </div>
              </Col>
              <Col className="img-bottom-side">
                <div className="img-item d-flex justify-content-center align-items-center">
                  <div className="img">
                    <img src={Img2} alt="roadmap-phase-3"/>
                  </div>
                </div>
                <div className="img-item d-flex justify-content-center align-items-center">
                  <div className="img">
                    <img src={Img3} alt="roadmap-phase-3"/>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={7} md={12} sm={12}
               className="content-detail d-flex justify-content-center align-items-center">
            <div className="content-desc comp-border-neon-shadow">
              {
                roadmapPhase3Data.map((val, index) => (
                  <p key={index} className="item comp-content-box">{val}</p>
                ))
              }
            </div>
          </Col>
        </Row>
        <Row className="phase-two-col-btn">
          <Col xl={6} lg={5} md={12} sm={12}/>
          <Col xl={6} lg={7} md={12} sm={12} className="d-flex justify-content-center align-items-center">
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