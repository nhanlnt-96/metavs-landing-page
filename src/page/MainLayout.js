import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../components/banner/BannerComp";
import AboutComp from "../components/about/AboutComp";
import RoadmapComp from "../components/roadmap/RoadmapComp";
import RarityComp from "../components/rarity/RarityComp";

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
    </Container>
  );
};

export default MainLayout;