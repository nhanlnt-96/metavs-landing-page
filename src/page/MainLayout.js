import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../components/banner/BannerComp";
import RoadmapComp from "../components/roadmap/RoadmapComp";
import FaqsComp from "../components/faqs/FaqsComp";
import TeamComp from "../components/team/TeamComp";
import FooterComp from "../components/footer/FooterComp";
import MintComp from "../components/mint/MintComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout" style={{overflow: "hidden"}}>
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="mint">
        <MintComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faqs">
        <FaqsComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row id="contact">
        <FooterComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;