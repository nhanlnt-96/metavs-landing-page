import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../components/banner/BannerComp";
import AboutComp from "../components/about/AboutComp";
import RoadmapComp from "../components/roadmap/RoadmapComp";
import RarityComp from "../components/rarity/RarityComp";
import FaqsComp from "../components/faqs/FaqsComp";
import TeamComp from "../components/team/TeamComp";
import FooterComp from "../components/footer/FooterComp";

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
      {/*<Row>*/}
      {/*  <FaqsComp/>*/}
      {/*</Row>*/}
      {/*<Row>*/}
      {/*  <TeamComp/>*/}
      {/*</Row>*/}
      {/*<Row>*/}
      {/*  <FooterComp/>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default MainLayout;