import { notification } from "antd";
import { FrownTwoTone, SmileTwoTone, WarningTwoTone } from "@ant-design/icons";
import GlobalColors from "../assets/colors/GlobalColors";

const StatusNotification = (type, title, message = {}) => {
  let icn;
  if (type === "success")
    icn = <SmileTwoTone twoToneColor={GlobalColors.lightPurple} />;
  else if (type === "warning")
    icn = <WarningTwoTone twoToneColor={GlobalColors.lightPurple} />;
  else icn = <FrownTwoTone twoToneColor={GlobalColors.lightPurple} />;

  let duration = 6.5;

  notification[type]({
    icon: icn,
    message: title,
    description: message,
    duration,
    style: {
      borderRadius: "6px",
      backgroundColor: "#f5f5f5",
    },
  });
};

export default StatusNotification;
