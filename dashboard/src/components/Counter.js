import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

import { Input, Button, Row, Col, Statistic, message } from "antd";
import { ClockCircleOutlined, YoutubeOutlined } from "@ant-design/icons";

import GlobalColors from "../assets/colors/GlobalColors";
import StatusNotification from "./StatusNotification";

const endDate = dayjs("2024-03-16T09:00:00");
const now = dayjs();
const deadline = endDate.diff(now);

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const onFinish = () => {
  console.log("Countdown finished");
};

const socialIcons = {
  youtube: <YoutubeOutlined style={{ fontSize: 40 }} />,
};

const socialLinks = [
  {
    icon: socialIcons.youtube,
    href: "https://www.youtube.com/@Surveyr.Africa",
    key: "youtube",
  },
];

function Counter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!email || !name) {
      StatusNotification("error", "Please enter both your name and email.");
      return;
    }

    if (!validateEmail(email)) {
      StatusNotification("error", "Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(`/api/earlyaccess`, {
        email,
        name,
      });

      console.log(response.status);
      if (response.status === 200) {
        StatusNotification(
          "success",
          "Successfully signed up for early access!",
        );
      }
    } catch (error) {
      StatusNotification(
        "error",
        "An error occurred while signing up for early access.",
      );
    }
  };

  return (
    <Row style={{ marginBottom: 18 }}>
      <Col style={{ textAlign: "center" }} span={24}>
        <Statistic.Countdown
          title=""
          value={Date.now() + deadline}
          onFinish={onFinish}
          format="D [Days] HH [Hours] mm [Min] ss [Sec]"
          valueStyle={{ color: "#FFF", fontSize: "2rem" }}
          prefix={<ClockCircleOutlined style={{ fontSize: "2rem" }} />}
          className="heroText gradientText"
        />
        <Input.Group style={{ marginTop: "1em", textAlign: "center" }}>
          <Row gutter={[8, 18]} justify="space-between" align="middle">
            <Col xs={24} md={24}>
              <Input
                style={{ width: "90%", height: "40px" }}
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </Col>
            <Col xs={24} md={24}>
              <Input
                style={{ width: "90%", height: "40px" }}
                placeholder="Provide email for early access 🚀"
                value={email}
                onChange={handleEmailChange}
              />
            </Col>
            <Col xs={24} md={24}>
              <Button
                type="primary"
                style={{
                  height: "40px",
                  backgroundColor: GlobalColors.mainPurple,
                }}
                onClick={handleSubmit}
                // block
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Input.Group>
      </Col>
      <Col span={24} style={{ textAlign: "center" }}>
        {socialLinks.map((link) => (
          <Button
            key={link.key}
            type="link"
            href={link.href}
            icon={link.icon}
            target="_blank"
            style={{ color: GlobalColors.mainPurple, fontSize: "1.5rem" }}
          />
        ))}
      </Col>
    </Row>
  );
}

export default Counter;
