import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import TacoRestaurant from "./pages/TacoRestaurant/TacoRestaurant";
import Giftstart from "./pages/Giftstart/Giftstart";
import NickGraham from "./pages/NickGraham/NickGraham";
import Doorwai from "./pages/Doorwai/Doorwai";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/taco-restaurant" element={<TacoRestaurant />} />
          <Route path="/giftstart" element={<Giftstart />} />
          <Route path="/nickgraham" element={<NickGraham />} />
          <Route path="/doorwai" element={<Doorwai />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
