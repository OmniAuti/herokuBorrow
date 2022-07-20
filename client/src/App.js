import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useReducer, useState, useEffect, useCallback } from "react";

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
import AccountGateway from "./components/AccountGateway";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { modalId: action.payload, active: !state.active };
  }
};

function App() {
  const [state, modalDispatch] = useReducer(modalReducer, {
    modalId: "",
    active: false,
  });
  const [modalData, setModalData] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);

  useEffect(() => {
    if (state.modalId.length <= 0) return;
    handleModalData(state.modalId);
  }, [state.active]);

  const handleModalData = async (id) => {
    setActiveModal(true);

    await getSingleItem(id)
      .then((res) => setModalData(res.data))
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    setActiveModal(false);
    setModalLoaded(false);
  };

  const handleOpenModal = () => {
    setModalLoaded(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header />

      <SingleItemFocusModal
        data={modalData}
        activeModal={activeModal}
        handleModalData={handleModalData}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        modalLoaded={modalLoaded}
      />

      <main className="App  bg-black h-full min-h-screen w-screen px-5 py-5 relative">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home modalDispatch={modalDispatch} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/borrow" element={<Borrow modalDispatch={modalDispatch} />} />
            <Route path='/account-gateway' element={<AccountGateway/>}/>
            <Route path="/offer" element={<Offer />} />
            <Route path="/ask" element={<Ask />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

export default App;
