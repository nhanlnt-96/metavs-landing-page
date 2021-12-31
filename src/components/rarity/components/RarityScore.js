import React from "react";
import {Col, Row} from "react-bootstrap";
import {rarityScoreData} from "../../../configs/rarityScoreData";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export const RarityScore = () => {
  return (
    <Row className="rarity-comp-score">
      {
        rarityScoreData.map((val, index) => (
          <div data-aos="fade-up" className="content-items">
            <div className="item">
              <div className="header d-flex justify-content-center align-items-center">
                <h6 className="header-title">{val.title}</h6>
              </div>
              <div className="avatar d-flex justify-content-center align-items-center">
                <div className="avatar-item">
                  <CircularProgressbarWithChildren styles={{
                    path: {
                      stroke: "#6ce5e8"
                    },
                    trail: {
                      stroke: "#494f56"
                    }
                  }} value={val.rarityScore}>
                    <img width="100%" src={val.avatar} alt={`${val.title}-${val.name}`}/>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div className="name">
                <p className="user-name">{val.name}</p>
              </div>
              <div className="score">
                <div className="rarity-score">
                  <p className="score-title">Rarity Score</p>
                  <h6 className="desc">{val.rarityScore}%</h6>
                </div>
                <div className="file-number">
                  <p className="score-title">File number</p>
                  <h6 className="desc">{val.fileNumber}</h6>
                </div>
              </div>
              <div className="rank">
                <p className="rank-title">RANK</p>
                <h6 className="desc">{val.rank}</h6>
              </div>
            </div>
          </div>
        ))
      }
    </Row>
  )
}