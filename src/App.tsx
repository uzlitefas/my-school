import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer";
import { Navbar } from "./components/shared/navbar";
import HomePage from "./pages/home";
import StatistikaBitiruvchilarPage from "./pages/statistika-bitiruvchilar-page";
import FanlarPage from "./pages/fanlar";

function App() {
  return (
    <div className="w-full">
      <Routes>
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
          path="/bitiruvchilar"
          element={
            <>
              <Navbar />
              <StatistikaBitiruvchilarPage />
              <Footer />
            </>
          }
        />
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
