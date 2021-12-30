import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {roadmapPhase2Data} from "../../../configs/roadmapPhase2Data";

export const Phase2 = () => {
  return (
    <Row className="roadmap-comp-phase-2">
      <Container className="phase-2-container">
        <Row className="phase-2-header">
          <div className="roadmap-comp-content-header d-flex flex-column justify-content-center align-items-center">
            <div className="content-phase-number d-flex justify-content-center align-items-center">
              <h6 className="number-item">2</h6>
            </div>
            <div className="content-phase-title">
              <h6 className="title-item">NFT marketplace<br/> with native token<br/> and staking - MetaVS token</h6>
            </div>
          </div>
        </Row>
        <Row className="phase-2-content">
          {
            roadmapPhase2Data.map((val, index) => (
              <Col key={index} className="content-item">
                <div className="content-item-title d-flex flex-column justify-content-center align-items-center">
                  <img className="arrow-title" src={val.icon} alt="metavs-arrow-down"/>
                  <h6 className="title">{val.title}</h6>
                </div>
                <div className="content-item-detail comp-border-neon-shadow">
                  <p className="content">{val.content}</p>
                  {
                    val.subContent.map((sub, key) => (
                      <p key={key} className="sub-content">{sub}</p>
                    ))
                  }
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Row>
  )
}