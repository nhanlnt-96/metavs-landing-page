import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ArrowDown from "../../../assets/gifs/arrowDown.gif";
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from "../../../assets/gifs/scrollDown.gif";
import {useWindowSize} from "../../../shared/helpers";
import {roadmapPhase4Data} from "../../../configs/roadmapPhase4Data";

export const Phase4 = () => {
  const currentScreenWidth = useWindowSize();
  return (
    <Row className="roadmap-comp-phase-4">
      <Container className="phase-three-col-container">
        <Row data-aos="zoom-out-up" className="phase-4-header">
          <div className="roadmap-comp-content-header d-flex flex-column justify-content-center align-items-center">
            <div className="content-phase-title">
              <h6 className="title-item">metavs mmorpg<br/> play to earn game</h6>
            </div>
          </div>
        </Row>
        <Row className="phase-three-col-content">
          {
            roadmapPhase4Data.map((val, index) => (
              <Col data-aos="fade-up" xl={4} lg={index === 2 ? 12 : 6} md={index === 2 ? 12 : 6} key={index} className="content-item">
                <div className="content-item-container">
                  <div className="content-item-title d-flex flex-column justify-content-center align-items-center">
                    <img className="arrow-title" src={currentScreenWidth < 768 ? ArrowDown : val.icon}
                         alt="metavs-arrow-down"/>
                    <h6 className="title">{val.title}</h6>
                  </div>
                  <div
                    className="content-item-detail comp-border-neon-shadow d-flex flex-column justify-content-center align-items-center">
                    <p className="content comp-content-box">{val.content}</p>
                    {
                      val.subContent.map((sub, key) => (
                        <p key={key} className="comp-content-box sub-content">{sub}</p>
                      ))
                    }
                  </div>
                </div>
                {
                  ((currentScreenWidth < 1200 && currentScreenWidth >= 768) && index === 2) ? (
                    <div className="content-item-img"></div>
                  ) : null
                }
              </Col>
            ))
          }
        </Row>
      </Container>
    </Row>
  )
}