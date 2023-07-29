import SectionNews from "./NewsItem";
import data from "../data/Novedades.json";
const Novedades = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
      <SectionNews data={data} />
    </div>
  );
};

export default Novedades;
