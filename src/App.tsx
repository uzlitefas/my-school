import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer";
import { Navbar } from "./components/shared/navbar";
import HomePage from "./pages/home";
import StatistikaBitiruvchilarPage from "./pages/statistika-bitiruvchilar-page";
import FanlarPage from "./pages/fanlar";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";

function App() {
  return (
    <div className="w-full">

      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/maktab"
          element={
            <>
              <Navbar />
              <Outlet/>
              <Footer />
            </>
          }
        >
          <Route path="" element={"maktab"} />
          <Route path="history" element={"maktab tarixi"} />
          <Route path="bitiruvchilar" element={<StatistikaBitiruvchilarPage/>} />
          <Route path="galarey" element={"maktab galareya"} />
        </Route>
        <Route
          path="/fanlar"
          element={
            <>
              <Navbar />
              <FanlarPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
