import React from "react";
// import CardNews from "./CardNews";
import data from "../data/Novedades.json";
const SectionNews = () => {
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {data.map((item) => (
        <div key={item.id} className="feature col text-white">
          {/* <CardNews item={item} /> */}
          <h3 className="fs-2">{item.title}</h3>
        <p>
         {item.description}
        </p>
        <a href="#" className="text-warning">
          Call to action
        </a>
        </div> 
      ))}
    </div>
  );
};

export default SectionNews;
