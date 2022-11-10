import React from "react";
import styled from "styled-components";
import BaseBotton from "./BaseBotton";

const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #40514e;
`;

export default PrimaryButton;
