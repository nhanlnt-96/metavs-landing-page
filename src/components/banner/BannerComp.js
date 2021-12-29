import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from '../../assets/gifs/scrollDown.gif';

import './BannerComp.scss';

const BannerComp = () => {
  return (
    <Container fluid className="banner-comp">
      <div className="banner-comp-blur-bg"/>
      <Row className="banner-comp-header">
        <HeaderComp/>
      </Row>
      <Container className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <h1 className="banner-comp-title">WELCOME TO<br/>"MetaVS"</h1>
        <Row className="banner-comp-content">
          <Col lg={7} md={7} sm={12} className="banner-comp-subtitle">
            <h4>The MetaVS ecosystem aims to bring you not only one of the most lucrative passive income</h4>
            <h4>NFT projects in the world but also the biggest RPGMMO play-to-earn game
              in the world.</h4>
          </Col>
          <Col lg={5} md={5} sm={12}
               className="banner-comp-btn d-flex flex-column justify-content-center align-items-center">
            <button className="comp-primary-btn">SHOP NOW
              <BiRightArrowAlt className="comp-primary-btn-icon"/>
            </button>
          </Col>
        </Row>
        <Row className="banner-comp-scroll">
          <img src={ScrollDown} alt="metavs-scroll-down"/>
        </Row>
      </Container>
    </Container>
  );
};

export default BannerComp;