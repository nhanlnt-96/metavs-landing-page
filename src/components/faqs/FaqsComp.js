import React from 'react';
import {Container, Row} from "react-bootstrap";
import {faqsData} from "../../configs/faqsData";
import QuestionImg from '../../assets/imgs/messageBox1-grey.png';
import AnswerImg from '../../assets/imgs/messageBox2.png';

import './FaqsComp.scss';
import ScrollDown from "../../assets/gifs/scrollDown.gif";

const FaqsComp = () => {
  return (
    <Container fluid className="faqs-comp">
      <Container className="faqs-comp-container">
        <Row data-aos="zoom-in" className="faqs-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">FAQ</h6>
        </Row>
        <Row className="faqs-comp-content">
          {
            faqsData.map((val, index) => (
              <div key={index}
                   className={`item-container d-flex align-items-center ${(index % 2 !== 0) && 'justify-content-end'}`}>
                <div className="item-detail">
                  <div data-aos="fade-rigth" className="item-question">
                    <img src={QuestionImg} alt="faqs-metavs"/>
                    <p className="question">{val.question}</p>
                  </div>
                  <div data-aos="fade-left" className="item-answer">
                    <img src={AnswerImg} alt="faqs-metavs"/>
                    <p className="answer">{val.answer}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
        <Row className="faqs-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default FaqsComp;