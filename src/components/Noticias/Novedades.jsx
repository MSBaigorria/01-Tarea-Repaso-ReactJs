import { useState } from "react";
import  dataNovedades  from "../../data/Novedades.json";
import NovedadesItem from "./NovedadesItem";
import NovedadesModal from "./NovedadesModal";
const Novedades = () => {
  
  const [novedades, setNovedades] = useState(dataNovedades);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (title) => {
    setShow(true);
    setTitle(title);
  };

  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
        <NovedadesItem novedades={novedades} handleShow={handleShow} />
        <NovedadesModal handleClose={handleClose} show={show} title={title} />
      </div>
    </>
  );
};

export default Novedades;
