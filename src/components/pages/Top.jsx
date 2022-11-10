import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import SecondaryButton from "../atoms/button/SecondaryButton";

const Top = () => {
  const history = useHistory();

  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    console.log("管理者");
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    console.log("一般");
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
export default Top;
