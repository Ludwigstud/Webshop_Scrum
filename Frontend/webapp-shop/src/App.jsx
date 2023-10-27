import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoardingPage from "./components/onBoarding/OnBoardingPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
