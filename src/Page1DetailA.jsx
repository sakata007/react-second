import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};

export default Page1DetailA;
