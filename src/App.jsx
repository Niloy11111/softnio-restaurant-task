import Favicon from "react-favicon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about/About";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Popular from "./components/popularfood/Popular";
import Testimonials from "./components/testimonials/Testimonials";
function App() {
  return (
    <>
      <Favicon url="https://i.ibb.co.com/c13TN3s/restaurant-1.png" />
      <Header />
      <About />
      {/* <Offer /> */}

      <Popular />
      <Booking />
      <Testimonials />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
