import React from "react";
import styled from "styled-components";
import Card from "../../atoms/card/Card";
import UserIconWithName from "../../molecules/user/UserIconWithName";

const UserCord = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <SDl>
        <UserIconWithName
          image={user.image}
          name={user.name}
          isAdmin={isAdmin}
        />
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

export default UserCord;