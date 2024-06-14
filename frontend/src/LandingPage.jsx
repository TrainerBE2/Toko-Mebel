import LandingRouters from "./routers/LandingRouters.jsx";
import Footer from "./components/LandingPage/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/LandingPage/Navbar/Navbar.jsx";

const LandingPage = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Navbar />
      <div>
        <LandingRouters />
      </div>
      <Footer />
    </Provider>
  );
};

export default LandingPage;
