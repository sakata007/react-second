import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import SecondaryButton from "../atoms/button/SecondaryButton";
import SearchInput from "../molecules/SearchInput";
import UserCord from "../organisms/user/UserCord";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `坂田${val}`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "112342qww",
    phone: "1111-333-222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };
});

const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  {
    console.log(userInfo);
  }
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>USER一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCord key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export default Users;
