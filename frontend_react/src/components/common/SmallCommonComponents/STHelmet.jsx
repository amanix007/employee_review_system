import React, { Component } from "react";
import { Helmet } from "react-helmet";

function STHelmetComponent(props) {
  let { active, data } = props.data;

  return active ? (
    <Helmet>
      <title>{data.title}</title>
      {data.meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </Helmet>
  ) : (
    ""
  );
}
export let STHelmet = React.memo(STHelmetComponent);
