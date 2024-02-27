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

//use this base url
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

  const handleSubmit = async () => {
    if (!email || !name) {
      message.error("Please enter both your name and email.");
      return;
    }

    try {
      //use the base url

      const response = await axios.post(apiUrl + "/api/earlyaccess", {
        email,
        name,
      });
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
        <Input.Group compact style={{ marginTop: "1em" }}>
          <Input
            style={{ width: "calc(60% - 100px)", height: "40px" }}
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            style={{ width: "calc(60% - 100px)", height: "40px" }}
            placeholder="Provide email for early access 🚀"
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type="primary"
            style={{ height: "40px", backgroundColor: GlobalColors.mainPurple }}
            onClick={handleSubmit}
          >
            Early Access
          </Button>
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
