import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturedP from './components/FeaturedP/FeaturedP';
import Midpage from './components/Midpage/Midpage';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <FeaturedP/>
      <Midpage/>
      <Form></Form>
    </div>
  );
}

export default App;
