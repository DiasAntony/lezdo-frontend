import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import CreateOTP from "./pages/create-otp/CreateOTP";
import CreatePassword from "./pages/createPassword/CreatePassword";
import AboutUserself from "./pages/about-yourself/AboutUserself";
import Option1 from "./pages/options/option-1/Option1";
import Option2 from "./pages/options/option-2/Option2";
import Option3 from "./pages/options/option-3/Option3";
import CompanyInfo from "./pages/company-info/CompanyInfo";
import PaymentInfo from "./pages/payment/PaymentInfo";
import ServicePage from "./pages/service-page/ServicePage";
import Congratulation from "./pages/congratulation/Congratulation";
import Signin from "./pages/login/Signin";
import SigninEmail from "./pages/login/SiginEmail";
import SigninOTP from "./pages/login/SigninOTP";
import SigninChangePass from "./pages/login/SigninChangePass";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
        style={{ width: "400px" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/otp" element={<CreateOTP />} />
        <Route path="/create/pass" element={<CreatePassword />} />
        <Route path="/create/about" element={<AboutUserself />} />
        <Route path="/create/about/opt1" element={<Option1 />} />
        <Route path="/create/about/opt2" element={<Option2 />} />
        <Route path="/create/about/opt3" element={<Option3 />} />
        <Route path="/create/about/company" element={<CompanyInfo />} />
        <Route path="/create/about/payment" element={<PaymentInfo />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/congratulations" element={<Congratulation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin/email" element={<SigninEmail />} />
        <Route path="/signin/otp" element={<SigninOTP />} />
        <Route path="/signin/changepass" element={<SigninChangePass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
