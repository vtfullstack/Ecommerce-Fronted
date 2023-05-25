import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import logo from '../../icons/logo.svg';
// import bottomfooterlogo from '../../icons/bottomfooterlogo.svg';
import { Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="rounded_div"></div>
        <Container className="footer_sec">
          <Row>
            <Col>Footer area</Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <Row>
            <Col md="9" xs={12}>
              <p className="my-auto copyrightfont ">Copyright © 2022 .</p>
            </Col>
            <Col md="3" xs={12}>
              <p className="my-auto copyrightfont ">
                Terms of Services and Privacy Policy
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
