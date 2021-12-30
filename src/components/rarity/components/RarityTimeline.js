import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export const RarityTimeline = () => {
  return (
    <Row className="rarity-comp-timeline">
      <Container className="rarity-comp-timeline-container">
        <Row className="items">
          <Col lg={3} md={6} sm={12} className="item">
            <div className="item-header" style={{backgroundColor: "#f14b1f"}}>
              <h6 className="title">Q1<br/>2022</h6>
            </div>
            <div className="item-content">
              <p className="content">MetaMan NFT Launch</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="item-empty"/>
          <Col lg={3} md={6} sm={12} className="item">
            <div className="item-header" style={{backgroundColor: "#5eb090"}}>
              <h6 className="title">Q3<br/>2022</h6>
            </div>
            <div className="item-content">
              <p className="content">MetaWomen NFT Launch</p>
              <p className="content">MetaVS Game V1 Release - PvP Arena Battle Play-To-Earn Game</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="item-empty"/>
        </Row>
        <Row className="items">
          <Col lg={3} md={6} sm={12} className="item-empty"/>
          <Col lg={3} md={6} sm={12} className="item">
            <div className="item-header" style={{backgroundColor: "#5271ff"}}>
              <h6 className="title">Q2<br/>2022</h6>
            </div>
            <div className="item-content">
              <p className="content">NFT Marketplace Launch</p>
              <p className="content">MetaVS Token Launch</p>
              <p className="content">Staking Launch</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="item-empty"/>
          <Col lg={3} md={6} sm={12} className="item">
            <div className="item-header" style={{backgroundColor: "#9d5eb0"}}>
              <h6 className="title">Q1<br/>2022/2023</h6>
            </div>
            <div className="item-content">
              <p className="content">MetaVS Game V2 Release - RPG MMO Play-To-Earn Game</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}