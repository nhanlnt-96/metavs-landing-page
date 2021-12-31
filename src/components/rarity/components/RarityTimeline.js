import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {rarityTimelineData} from "../../../configs/rarityTimelineData";

export const RarityTimeline = () => {
  return (
    <Row className="rarity-comp-timeline">
      <Container className="rarity-comp-timeline-container">
        <Row className="items">
          {
            rarityTimelineData.map((val, index) => (
              <div key={index} className="item-container">
                <div className="item-child d-flex flex-column justify-content-center align-items-center">
                  <div className="header d-flex flex-column justify-content-center align-items-center"
                       style={{backgroundColor: val.color}}>
                    {
                      val.title.map((title, titleKey) => (
                        <h6 key={titleKey} className="title">{title}</h6>
                      ))
                    }
                  </div>
                  <div className="content d-flex flex-column justify-content-center align-items-center">
                    {
                      val.content.map((content, key) => (
                        <p key={key} className="detail">{content}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Row>
  )
}