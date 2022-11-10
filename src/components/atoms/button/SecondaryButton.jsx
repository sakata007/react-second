import React from "react";
import styled from "styled-components";
import BaseBotton from "./BaseBotton";

const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #11999e;
`;

export default SecondaryButton;
