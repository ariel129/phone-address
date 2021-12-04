import React from "react";
import { Container, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Contact } from "containers/Contact";

export const App = () => {
  return (
    <>
      <Container>
        <Col style={{ paddingTop: 50 }}>
          <Contact />
        </Col>
      </Container>
      <ToastContainer />
    </>
  );
};
