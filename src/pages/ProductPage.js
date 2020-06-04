import React from "react";
import { Route, Link } from "react-router-dom";

export default function ProductPage({ match }) {
  console.log("match", match);
  const { id } = match.params;
  return (
    <div>
      <h1>Product-{id}</h1>
      <Link to={match.url + "/detail"}>detail</Link>
      <Route path='match.url + "/detail' component={Detail} />
    </div>
  );
}

function Detail() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
