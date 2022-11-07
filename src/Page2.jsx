import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/999">UrlParameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};

export default Page2;
