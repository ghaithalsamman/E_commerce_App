import ProductsList from "./ProductsList";
import Slider from "./Slider";
import Navbar from "./Navbar";
import About from "./About";
import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
