import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./screens/productPage/ProductPage";

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
