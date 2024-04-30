import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturedP from './components/FeaturedP/FeaturedP';
import Midpage from './components/Midpage/Midpage';
import Form from './components/Form/Form';
import Finest from './components/Finest/Finest';
import Explore from './components/Explore/Explore';
import Agents from './components/Agents/Agents';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedP />
      <Midpage />
      <Form />
       <div className="discover2">
        <h1>Check Our Selection Of Finest Properties</h1>
      </div>
      <Finest />
      <Explore />
      <Agents />
      <Testimonials />

     
    </div>
  );
}

export default App;
