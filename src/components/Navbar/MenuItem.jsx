import React from "react";

const MenuItem = ({ item }) => {
  // const isDisable = !item.active ? "disabled" : "";
  return (
    <a
      className={!item.active ? ` nav-link active text-white disabled` : `nav-link active text-white `}
      aria-current="page"
      href="#"
    >
      {item.name}
    </a>
  );
};
export default MenuItem;
