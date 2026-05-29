import React from "react";
import Products from "./pages/Product/Products";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Page Components
import Home from "./pages/Home/Home";
// import Products from './pages/Products/Products';
// import AboutUs from './pages/AboutUs';
import Services from './pages/Services/Services';
// import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
