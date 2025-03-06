import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Giftstart from "./pages/Giftstart/Giftstart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/giftstart" element={<Giftstart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
