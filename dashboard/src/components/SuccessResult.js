import React from "react";
import { Button, Result } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import GlobalColors from "../assets/colors/GlobalColors";

const SuccessResult = () => (
  <Result
    icon={<SmileTwoTone twoToneColor={GlobalColors.lightPurple} />}
    title="Successfully Signed Up for Early Access! 🚀"
    subTitle="You are now on the waiting list. Watch out for email updates!"
  />
);

export default SuccessResult;
