import Buscador from "./Buscador"
import ItemsNavbar from "./ItemsNavbar"
import data  from "../data/Menu.json";

const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ItemsNavbar data={data}/>
            <Buscador/>
          </div>
        </div>
      </nav>
  )
}

export default NavbarMenu