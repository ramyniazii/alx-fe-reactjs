import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/services" component={<Services />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;