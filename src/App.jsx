import Header from "./components/Header/Navbar.jsx";
import Routers from "./routers/Routers.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {


  return (
    <>
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
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
