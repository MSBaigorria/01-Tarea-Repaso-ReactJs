
import './styles/index.css';
import './styles/features.css';
import NavbarMenu from './components/NavbarMenu';
import Banner from './components/Banner';
import Novedades from './components/Novedades';

const App = () => {
  return (
    <>
      <NavbarMenu/>
      <Banner/>
      <Novedades/>
    </>
  );
}

export default App
