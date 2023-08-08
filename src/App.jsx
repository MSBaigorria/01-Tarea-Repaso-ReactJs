
import './styles/index.css';
import './styles/features.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Noticias from './components/Noticias/Noticias';

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Noticias/>
    </>
  );
}

export default App
