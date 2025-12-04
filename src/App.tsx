import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer";
import { Navbar } from "./components/shared/navbar";
import HomePage from "./pages/home";
import StatistikaBitiruvchilarPage from "./pages/statistika-bitiruvchilar-page";
import LoginPage from "./pages/auth/login";
import About from "./components/about";
import Gallery from "./components/galary";
import Contact from "./components/contact";
import AdminPanel from "./pages/admin-panel";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="galary" element={<Gallery />} />
          <Route
            path="Bitiruvchilar"
            element={<StatistikaBitiruvchilarPage />}
          />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="/admin"
          element={
            <>
              <AdminPanel />
              <Outlet />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
