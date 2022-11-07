import React from "react";
import { useParams, useLocation } from "react-router-dom";

const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>URLparameterページです。</h1>
      <p>パラメーターは{id} です</p>
      <p>クエリパラメーターは　{query.get("name")}です</p>
    </div>
  );
};

export default UrlParameter;
