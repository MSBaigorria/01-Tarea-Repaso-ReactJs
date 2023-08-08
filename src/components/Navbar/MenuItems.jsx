import React from "react";
import MenuItem from "./MenuItem";
// import { dataMenu } from "../../data/Menu.json";
const MenuItems = ({dataMenu}) => {
  return (
    <>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {dataMenu.map((item)=>(
      <li key={item.id} className="nav-item ">
        <MenuItem item={item}/>
        </li>
      ))}
      </ul>
    </>
  );
};

export default MenuItems;
