import React from "react";
import { notification } from "antd";
import { FrownTwoTone, SmileTwoTone, WarningTwoTone } from "@ant-design/icons";
import GlobalColors from "../assets/colors/GlobalColors";

const StatusNotification = (type, title, message) => {
  let icon;

  switch (type) {
    case "success":
      icon = <SmileTwoTone twoToneColor={GlobalColors.lightPurple} />;
      break;
    case "warning":
      icon = <WarningTwoTone twoToneColor={GlobalColors.lightPurple} />;
      break;
    case "error":
      icon = <FrownTwoTone twoToneColor={GlobalColors.lightPurple} />;
      break;
    default:
      icon = <FrownTwoTone twoToneColor={GlobalColors.lightPurple} />;
  }

  const duration = 6.0;

  notification[type]({
    message: title,
    description: message,
    duration: duration,
    icon,
    style: {
      borderRadius: "6px",
      backgroundColor: "#f5f5f5",
    },
  });
};

export default StatusNotification;
