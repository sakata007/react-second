import React from "react";
// import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../atoms/button/SecondaryButton";
import Input from "../atoms/input/Input";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

export default SearchInput;
