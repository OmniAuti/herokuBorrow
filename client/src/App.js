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
import AccountEditPostModal from "./components/AccountEditPostModal";
//CONTEXT IMPORT
import AuthContextProvider from "./context/AuthContext";
// APPI CALLS
import { getSingleItem, getSingleItemAsk } from "./api/api";
// USE REDUCER FUNCTION
const modalReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modalId: action.payload,
        active: !state.active,
        modalType: "singleFocus",
      };
    case "ACCOUNT_MODAL-offer":
      return {
        modalId: action.payload,
        active: !state.active,
        modalType: "accountEditOffer",
      };
    case "ACCOUNT_MODAL-ask":
      return {
        modalId: action.payload,
        active: !state.active,
        modalType: "accountEditAsk",
      };
  }
};

function App() {
  const [state, modalDispatch] = useReducer(modalReducer, {
    modalId: "",
    active: false,
    modalType: "",
  });
  const [modalDataSingleFocus, setModalDataSingleFocus] = useState([]);
  const [modalDataEdit, setModalDataEdit] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [activeModalEdit, setActiveModalEdit] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);
  const [modalLoadedEdit, setModalLoadedEdit] = useState(false);
  const [bookmarkRefresh, setBookmarkRefresh] = useState(false);

  const [refreshAfterEdit, setRefreshAfterEdit] = useState(false)

  const location = useLocation();

  // USED TO CLOSE MODAL ON PAGE CHANGE
  useEffect(() => {
    if (activeModal === true) {
      handleCloseModal();
    }
  }, [location.pathname]);
  // REFRESH THE DATA TO SHOW CHANGING BOOKMARK
  useEffect(() => {
    if (state.modalId.length <= 0) return;
    handleModalData(state.modalId);
  }, [state.active, bookmarkRefresh]);

  const handleModalBookmark = () => {
    setBookmarkRefresh(!bookmarkRefresh);
  };

  const handleModalData = async (id) => {
    if (state.modalType === "singleFocus") {
      await getSingleItem(id)
        .then((res) => setModalDataSingleFocus(res.data))
        .catch((err) => console.log(err));
      setActiveModal(true);
    } else if (state.modalType === "accountEditOffer") {
      await getSingleItem(id)
        .then((res) => setModalDataEdit(res.data))
        .catch((err) => console.log(err));
      setActiveModalEdit(true);

    } else if (state.modalType === "accountEditAsk") {
      console.log("askpost", id);
      await getSingleItemAsk(id)
        .then((res) => setModalDataEdit(res.data))
        .catch((err) => console.log(err));
        setActiveModalEdit(true);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(false);
    setActiveModalEdit(false);
    setModalLoaded(false);
    setModalLoadedEdit(false);
  };

  const handleOpenModal = () => {
    setModalLoaded(true);
  };
  const handleOpenModalEdit = () => {
    setModalLoadedEdit(true);
  };

  const handleItemRefreshAfterEdit = () => {
    setRefreshAfterEdit(!refreshAfterEdit)
    console.log('refresh')
  }

  return (
    <div className="overflow-x-hidden">
      <AuthContextProvider>
        <Header />

        <SingleItemFocusModal
          data={modalDataSingleFocus}
          activeModal={activeModal}
          handleModalData={handleModalData}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalLoaded={modalLoaded}
          handleModalBookmark={handleModalBookmark}
        />

        <AccountEditPostModal
          data={modalDataEdit}
          activeModal={activeModalEdit}
          handleModalData={handleModalData}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModalEdit}
          modalLoaded={modalLoadedEdit}
          handleItemRefreshAfterEdit={handleItemRefreshAfterEdit }
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
                    <AccountDashboard refreshAfterEdit={refreshAfterEdit} modalDispatch={modalDispatch} />{" "}
                  </ProtectedUserRoute>
                }
              />

              <Route
                path="/offer"
                element={
                  <ProtectedUserRoute>
                    {" "}
                    <Offer />
                  </ProtectedUserRoute>
                }
              />

              <Route
                path="/ask"
                element={
                  <ProtectedUserRoute>
                    <Ask />
                  </ProtectedUserRoute>
                }
              />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
