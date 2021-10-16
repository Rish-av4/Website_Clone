import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Cards from './components/grid_cards';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
