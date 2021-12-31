import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../components/banner/BannerComp";
import AboutComp from "../components/about/AboutComp";
import RoadmapComp from "../components/roadmap/RoadmapComp";
import RarityComp from "../components/rarity/RarityComp";
import FaqsComp from "../components/faqs/FaqsComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row>
        <BannerComp/>
      </Row>
      <Row>
        <AboutComp/>
      </Row>
      <Row>
        <RoadmapComp/>
      </Row>
      <Row>
        <RarityComp/>
      </Row>
      <Row>
        <FaqsComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;