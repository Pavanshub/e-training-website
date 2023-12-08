import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Classes from "./components/Classes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar  />
      <Hero />
      <Features />
      <Newsletter />
      <Classes/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
