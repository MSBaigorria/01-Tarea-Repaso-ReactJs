
const CardNews = ({item}) => {
    
  return (
    <>
      <h3 className="fs-2">{item.title} </h3>
      <p>
        {item.description}
      </p>
      {/* <a href="#" className="text-warning">
        {item.id}
      </a> */}
    </>
  );
};

export default CardNews;
