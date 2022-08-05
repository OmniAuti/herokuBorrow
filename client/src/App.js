import "./App.css";
// FUNCTIONALITY
import { Routes, Route } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
// ROUTER
import { useLocation } from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
//PAGES
import Home from "./pages/Home";
import Borrow from "./pages/Borrow";
import Ask from "./pages/Ask";
import AboutPage from "./pages/AboutPage";
import Offer from "./pages/Offer";
import AccountGateway from "./pages/AccountGateway";
import AccountDashboard from "./pages/AccountDashboard";
import ProtectedUserRoute from "./components/ProtectedUserRoute";
//WRAP FOR SCROLL TO TOP ON NEW ROUTE
import ScrollToTop from "./components/ScrollToTop";
import SingleItemFocusModal from "./components/SingleItemFocusModal";
//CONTEXT IMPORT
import AuthContextProvider from "./context/AuthContext";
// APPI CALLS
import { getSingleItem } from "./api/api";
// USE REDUCER FUNCTION
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
 // const [userZipcode, setUserZipCode] = useState('')


  const location = useLocation()

  // USING FOR POSSIBLE DEFAULT PULL FROM LOCAL POSTS
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(getzipcode, (err) => {
  //     console.log(err)
  //   })
  // }, [])

  // const getzipcode = async (position) => {
  //   console.log(position)
  //   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${41.964159}+${-87.6797706}&key=6172764d97b8435b90574015c5f717fb`).then(res => res.json()).then(data => console.log(data))
    
  // }

  useEffect(() => {
    if (activeModal === true) {
      handleCloseModal()
    }
  }, [location.pathname])

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
      <AuthContextProvider>
        <Header />

        <SingleItemFocusModal
          data={modalData}
          activeModal={activeModal}
          handleModalData={handleModalData}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalLoaded={modalLoaded}
        />

        <main className="App  bg-black h-full min-h-screen w-screen px-5 pb-5 relative">
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={<Home modalDispatch={modalDispatch} />}
              />
              <Route path="/about" element={<AboutPage />} />

              <Route
                path="/borrow"
                element={<Borrow modalDispatch={modalDispatch} />}
              />
              <Route path="/account-gateway" element={<AccountGateway />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedUserRoute>
                    {" "}
                    <AccountDashboard />{" "}
                  </ProtectedUserRoute>
                }
              />

              <Route path="/offer" element={<ProtectedUserRoute> <Offer /></ProtectedUserRoute>} />

              <Route path="/ask" element={<ProtectedUserRoute><Ask /></ProtectedUserRoute>} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
