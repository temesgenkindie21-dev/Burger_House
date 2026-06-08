import React, { useState } from "react";

function Link({ pages, active, setActive, setOpen }) {
  const lowerCase = pages.toLowerCase().replace(/ /g, "");

  return (
    <li
      className={`${active === lowerCase ? "text-yellow-500" : "text-white"} hover:text-yellow-500 cursor-pointer ease-in duration-200 `}
      onClick={() => {
        setActive(lowerCase);
        setOpen(false);
      }}
    >
      <a href={`#${lowerCase}`}>{pages}</a>
    </li>
  );
}

export default Link;
