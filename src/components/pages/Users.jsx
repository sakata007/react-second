import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
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
// console.log(users);

const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>USER一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((obj) => (
          <UserCord key={obj.id} user={obj} isAdmin={isAdmin} />
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
