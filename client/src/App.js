import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Borrow from "./components/Borrow";
import Ask from "./components/Ask";
import Offer from "./components/Offer";
import AboutPage from "./components/AboutPage";
//WRAP FOR SCROLL TO TOP ON NEW ROUTE
import ScrollToTop from "./components/ScrollToTop";
import SingleItemFocusModal from "./components/SingleItemFocusModal";
import { getSingleItem } from "./api/api";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { modalId: action.payload };
  }
};

function App() {
  const [state, modalDispatch] = useReducer(modalReducer, { modalId: "" });
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    if (state.modalId.length <= 0) return;
    console.log(state.modalId, "in APP");
    handleModalData(state.modalId);
  }, [state.modalId]);

  const handleModalData = async (id) => {
    await getSingleItem(id)
      .then((res) => setModalData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />

      <SingleItemFocusModal data={modalData} />

      <main className="App bg-black h-full min-h-screen w-screen px-5 py-5 relative">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home modalDispatch={modalDispatch} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/borrow"
              element={<Borrow modalDispatch={modalDispatch} />}
            />
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
