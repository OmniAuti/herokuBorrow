import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Borrow from "./components/Borrow";
import Ask from "./components/Ask";
import Offer from "./components/Offer";
import AboutPage from "./components/AboutPage";
//WRAP FOR SCROLL TO TOP ON NEW ROUTE
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main className="App bg-black h-full min-h-screen w-screen px-5 py-5 relative">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/ask" element={<Ask />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  );
}

export default App;
