import Enlaces from "./Enlaces";

const ItemsNavbar = ({ data }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {data.map((item) => (
        <li key={item.id} className="nav-item ">
          <Enlaces item={item}/>
        </li>
      ))}
    </ul>
  );
};

export default ItemsNavbar;
