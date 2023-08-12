
import './styles/index.css';
import './styles/features.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Novedades from './components/Noticias/Novedades';

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Novedades/>
    </>
  );
}

export default App
