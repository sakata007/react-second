import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>Pageが見つかりません</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};

export default Page404;
