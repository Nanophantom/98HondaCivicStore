import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Product from "./Product";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/product" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>

      <div className="div-home-image">
        <div className="div-home-text">
          <p>Honda Civics Available now.</p>
          <p>Get yours today!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
