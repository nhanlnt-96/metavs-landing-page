import React from 'react';
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../components/header/HeaderComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row>
        <HeaderComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;