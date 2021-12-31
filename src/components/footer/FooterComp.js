import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebookF, FaInstagram, SiTwitter, SiYoutube} from "react-icons/all";
import FooterImg from '../../assets/imgs/footerImg.svg';

import './FooterComp.scss';

const FooterComp = () => {
  return (
    <Container fluid className="footer-comp comp-height d-flex justify-content-center align-items-center">
      <Container className="footer-comp-container">
        <Row className="footer-comp-content">
          <Col lg={6} md={6} sm={12} className="content-left-side d-flex flex-column justify-content-center">
            <div className="content-title">
              <h6 className="comp-primary-title">CONTACT</h6>
            </div>
            <div className="contact-desc">
              <div className="contact-direct">
                <p className="contact-item">If you encounter any problem,</p>
                <p className="contact-item">contact us on: MetaVS.com</p>
                <p className="email-item">MetaVS@gmail.com</p>
              </div>
              <div className="contact-social d-flex align-items-center">
                <SiTwitter/>
                <FaFacebookF/>
                <SiYoutube/>
                <FaInstagram/>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="content-right-side d-flex justify-content-center align-items-center">
            <div className="footer-img">
              <img src={FooterImg} alt="metavs-footer"/>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FooterComp;