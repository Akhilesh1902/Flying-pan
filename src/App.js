import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Adventure from "./components/adventure/Adventure";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import UserExp from "./components/user-experience/UserExp";
import "./css/App.css";

function App() {
  return (
    <>
      <Router>
        <Hero />
        <Adventure />
        <Cards />
        <UserExp />
        <Footer />
        {/* adding router */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
