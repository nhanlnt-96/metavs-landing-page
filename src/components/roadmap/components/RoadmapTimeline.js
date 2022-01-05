import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {roadmapTimelineData} from "../../../configs/roadmapTimelineData";

export const RoadmapTimeline = () => {
  return (
    <Row className="roadmap-comp-timeline">
      <Container className="roadmap-comp-timeline-container">
        <Row className="items">
          {
            roadmapTimelineData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="item-container">
                <div className="item-child d-flex flex-column justify-content-center align-items-center">
                  <div className="header d-flex flex-column justify-content-center align-items-center">
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