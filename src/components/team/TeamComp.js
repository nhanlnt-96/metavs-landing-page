import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './TeamComp.scss';
import {teamData} from "../../configs/teamData";
import ScrollDown from "../../assets/gifs/scrollDown.gif";

const TeamComp = () => {
  return (
    <Container fluid className="team-comp">
      <Container className="team-comp-container">
        <Row data-aos="zoom-in-up" className="team-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">TEAM</h6>
        </Row>
        <Row className="animate-line">
          <div className="line-container">
            <div className="line line-left-to-right"/>
          </div>
        </Row>
        <Row className="team-comp-content d-flex justify-content-center align-items-center">
          {
            teamData.map((val, index) => (
              <Col data-aos={(index % 2 === 0 ? "fade-up" : "fade-down")} lg={3} md={3} sm={12} key={index}
                   className="item">
                <div className="ava-img">
                  <img src={val.avatar} alt={val.title}/>
                </div>
                <div className="member-title d-flex justify-content-center align-items-center">
                  <p className="name">{val.title}</p>
                </div>
              </Col>
            ))
          }
        </Row>
        <Row className="animate-line">
          <div className="line-container">
            <div className="line line-right-to-left"/>
          </div>
        </Row>
        <Row data-aos="fade-down" className="team-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default TeamComp;