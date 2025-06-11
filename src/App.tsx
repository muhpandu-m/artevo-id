import About from "./components/About";
import FeaturedTemplates from "./components/FeaturedTemplates";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <FeaturedTemplates/>
      <Pricing/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default App;
