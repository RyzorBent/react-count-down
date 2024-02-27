import React from "react";
import { Row, Col, Typography, Button, Space, Grid } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import getScreenSize from "../utils/getScreenSize";
import { ReactComponent as LandingFred } from "../assets/images/landing-fred.svg";
import Counter from "./Counter";

// import HeroParticles from './HeroParticles';

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Hero = () => {
  const screens = useBreakpoint();

  const screenSize = getScreenSize(screens);

  return (
    <div id="hero" className="hero container">
      {/* <HeroParticles /> */}
      <Row className="heroRow">
        <Col>
          <Row gutter={[0, 24]} justify="space-between">
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <LandingFred
                style={{
                  width: "100%",
                  height: screenSize === "xs" ? 180 : "100%",
                }}
              />
            </Col>
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Row justify="center" align="middle">
                <Col className="heroCol" style={{ textAlign: "center" }}>
                  <Paragraph
                    className="heroText heroCol gradientText"
                    style={{ color: "#25d366" }}
                  >
                    Surveyr, Launching Soon
                  </Paragraph>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Counter />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  );
};

export default Hero;
