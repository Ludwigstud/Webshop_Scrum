import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
