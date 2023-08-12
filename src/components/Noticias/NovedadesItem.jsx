import React from "react";


const NovedadesItem = ({ novedades, handelShow }) => {
  return (
    <>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {novedades.map((item) => (
          <div key={item.id} className="feature col text-white">
            <h3 className="fs-2">{item.title}</h3>
            <p>{item.description}</p>
            <button
              onClick={() => handelShow(item.title)}
              className="text-warning"
            >
              Call to action
            </button>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default NovedadesItem;
