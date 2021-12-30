import React, {useLayoutEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {roadmapPhase2Data} from "../../../configs/roadmapPhase2Data";
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from "../../../assets/gifs/scrollDown.gif";
import ArrowDown from '../../../assets/gifs/arrowDown.gif';

const useWindowSize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return currentWidth;
};

export const Phase2 = () => {
  const currentScreenWidth = useWindowSize();
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
              <Col xl={4} lg={index === 2 ? 12 : 6} md={index === 2 ? 12 : 6} key={index} className="content-item">
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
        <Row className="phase-2-btn d-flex justify-content-center align-items-center">
          <button className="comp-primary-btn">SHOW MORE
            <BiRightArrowAlt className="comp-primary-btn-icon"/>
          </button>
        </Row>
        <Row className="phase-scroll-down d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Row>
  )
}