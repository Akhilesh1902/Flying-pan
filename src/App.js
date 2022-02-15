import Hero from "./components/hero/Hero";
import Adventure from "./components/adventure/Adventure";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import UserExp from "./components/user-experience/UserExp";
import "./css/App.css";

function App() {
  return (
    <>
      <Hero />
      <Adventure />
      <Cards />
      <UserExp />
      <Footer />
    </>
  );
}

export default App;
