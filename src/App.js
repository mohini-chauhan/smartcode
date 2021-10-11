import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Hero from './Components/hero/Hero';
import Features from "./Components/Features/Features";
import Amazing from './Components/Amazing/Amazing';
import Icondesc from './Components/icons/Icondesc';
import Testimonial from './Components/testimonial/Testimonial';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';

import Navbarsection from './Components/nav/Navbarsection';

function App() {
  return (
    <div className="App">
        <Navbarsection/>
        <Hero/>
        <Features/>
        <Amazing/>
        <Icondesc/>
        <Testimonial/>
        <Faq/>
        <Footer/>
    </div>
  );
}

export default App;
