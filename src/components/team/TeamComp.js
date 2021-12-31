import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './TeamComp.scss';
import {teamData} from "../../configs/teamData";
import ScrollDown from "../../assets/gifs/scrollDown.gif";

const TeamComp = () => {
  return (
    <Container fluid className="team-comp">
      <Container className="team-comp-container">
        <Row className="team-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">TEAM</h6>
        </Row>
        <Row className="animate-line">
          <div className="line-container">
            <div className="line line-left-to-right"/>
          </div>
        </Row>
        <Row className="team-comp-content">
          {
            teamData.map((val, index) => (
              <Col lg={3} md={3} sm={12} key={index} className="item">
                <div className="ava-img">
                  <img src={val.avatar} alt={val.title}/>
                </div>
                <div className="member-title">
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
        <Row className="team-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default TeamComp;