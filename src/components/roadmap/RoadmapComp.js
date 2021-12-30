import React from 'react';
import {Container} from "react-bootstrap";
import {Phase1} from "./components";

import './RoadmapComp.scss';

const RoadmapComp = () => {
    return (
        <Container fluid className="roadmap-comp comp-height">
            <Container className="roadmap-comp-container">
                <Phase1/>
            </Container>
        </Container>
    );
};

export default RoadmapComp;