import React from "react";

const Name = ({ id, info, handleFavourite }) => (
  <li className={info.sex} onClick={() => handleFavourite(id)}>
    {info.name}
  </li>
);
export default Name;
